import {CustomHttp} from "./custom-http";
import config from "../../config/config";

export class GetCategory {

  // тип категории
  constructor(typeCategory) {
    return this.categories(typeCategory);
  }

  // запрос на сервер для получения списка категорий с указание типа
  async categories(typeCategory) {
    return await CustomHttp.request(config.host + '/categories/' + typeCategory);
  }
}