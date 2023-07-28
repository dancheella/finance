import {CustomHttp} from "./custom-http";
import config from "../../config/config";
import dayjs from "dayjs";

export class GetOperation {
  constructor(period, from, to) {
    return this.getOperationsByPeriod(period, from, to);
  }

  // происходит форматирование дат
  async getOperationsByPeriod(period, from, to) {
    let dateFrom = dayjs(from, "DD.MM.YYYY").format("YYYY-MM-DD");
    let dateTo = dayjs(to, "DD.MM.YYYY").format("YYYY-MM-DD");
    let operations = await this.getOperation('period=' + period + '&dateFrom=' + dateFrom + '&dateTo=' + dateTo);
    if (operations) return operations;
  }

  // информация о периоде и датах (делается HTTP-запрос)
  async getOperation(date) {
    return await CustomHttp.request(config.host + '/operations?' + date);
  }
}