"use strict";

import axios from "axios";
import { API } from "../const/const";

const services = {
  get: () =>
    axios(API)
      .then(({ data }) => data)
      .catch((error) => console.error(error)),

  delete: (id) =>
    axios
      .delete(API + `/${id}`)
      .then(({ data }) => data)
      .catch((error) => console.error(error)),

  put: (id, item) =>
    axios
      .put(API + `/${id}`, item)
      .then(({ data }) => data)
      .catch((error) => console.error(error)),

  post: (item) =>
    axios
      .post(API, item)
      .then(({ data }) => data)
      .catch((error) => console.error(error)),
};

export { services };
