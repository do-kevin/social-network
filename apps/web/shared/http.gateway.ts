class HttpGateway {
  apiURL = null;
  headers = {
    "Content-Type": "application/json",
  };

  constructor() {
    this.apiURL = process.env.API_SERVER_URL || `http://localhost:8000`;
  }

  get = async (path) => {
    let responseDto = await fetch(this.apiURL + path);
    responseDto = await responseDto.json();
    return responseDto;
  };

  post = async (path, requestDto) => {
    let responseDto = await fetch(this.apiURL + path, {
      method: "POST",
      body: JSON.stringify(requestDto),
      headers: this.headers,
    });

    responseDto = await responseDto.json();

    return responseDto;
  };

  update = async (path, requestDto) => {
    let responseDto = await fetch(this.apiURL + path, {
      method: "PUT",
      body: JSON.stringify(requestDto),
      headers: this.headers,
    });

    responseDto = await responseDto.json();

    return responseDto;
  };

  delete = async (path) => {
    let responseDto = await fetch(this.apiURL + path, {
      method: "DELETE",
      headers: this.headers,
    });

    responseDto = await responseDto.json();

    return responseDto;
  };
}

export default new HttpGateway();
