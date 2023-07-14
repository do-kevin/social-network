import axios from "axios";

interface RequestInitWithNext extends RequestInit {
  next?:
    | {
        revalidate?: number | false;
      }
    | undefined;
}

class HttpGateway {
  apiURL: string | null = null;
  headers = {
    "Content-Type": "application/json",
  };

  constructor() {
    this.apiURL = process.env.API_SERVER_URL || `http://localhost:8000`;
  }

  get = async (path: string, _options: RequestInitWithNext) => {
    try {
      const responseDto = await axios.get(this.apiURL + path, {
        adapter: require("axios/lib/adapters/http"),
      });

      return responseDto.data;
    } catch (error) {
      console.error(error);
    }
  };

  post = async (path: string, requestDto: unknown) => {
    const responseDto = await fetch(this.apiURL + path, {
      method: "POST",
      body: JSON.stringify(requestDto),
      headers: this.headers,
    });

    const dto = await responseDto.json();

    return dto;
  };

  update = async (path: string, requestDto: unknown) => {
    let responseDto = await fetch(this.apiURL + path, {
      method: "PUT",
      body: JSON.stringify(requestDto),
      headers: this.headers,
    });

    const dto = await responseDto.json();

    return dto;
  };

  delete = async (path: string) => {
    let responseDto = await fetch(this.apiURL + path, {
      method: "DELETE",
      headers: this.headers,
    });

    const dto = await responseDto.json();

    return dto;
  };
}

export default new HttpGateway();
