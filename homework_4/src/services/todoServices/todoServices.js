"use strict";

import axios from "axios";

const URL = "https://66d5bbd7f5859a70426741b3.mockapi.io/todos";

const services = {
  get: () =>
    axios(URL)
      .then(({ data }) => data)
      .catch((error) => console.error(error)),

  delete: (id) =>
    axios
      .delete(URL + `/${id}`)
      .then(({ data }) => data)
      .catch((error) => console.error(error)),

  put: (id, item) =>
    axios
      .put(URL + `/${id}`, item)
      .then(({ data }) => data)
      .catch((error) => console.error(error)),

  post: (item) =>
    axios
      .post(URL, item)
      .then(({ data }) => data)
      .catch((error) => console.error(error)),
};

export { services };
