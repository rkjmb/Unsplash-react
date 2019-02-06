import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization:
      "Client-ID 06da75de0ef5931dbe51f434d5120d9106c69a025637de6a6dd4ffe61d1ed02d"
  }
});
