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

  get = async (
    path: string,
    options: RequestInitWithNext = {
      next: {
        revalidate: 60,
      },
    }
  ) => {
    let responseDto = await fetch(this.apiURL + path, options);
    responseDto = await responseDto.json();
    console.log("dto: ", responseDto);
    return responseDto;
  };

  post = async (path: string, requestDto: unknown) => {
    let responseDto = await fetch(this.apiURL + path, {
      method: "POST",
      body: JSON.stringify(requestDto),
      headers: this.headers,
    });

    responseDto = await responseDto.json();

    return responseDto;
  };

  update = async (path: string, requestDto: unknown) => {
    let responseDto = await fetch(this.apiURL + path, {
      method: "PUT",
      body: JSON.stringify(requestDto),
      headers: this.headers,
    });

    responseDto = await responseDto.json();

    return responseDto;
  };

  delete = async (path: string) => {
    let responseDto = await fetch(this.apiURL + path, {
      method: "DELETE",
      headers: this.headers,
    });

    responseDto = await responseDto.json();

    return responseDto;
  };
}

export default new HttpGateway();
