import { CustomHttp } from "./custom-http";
import config from "../../config/config";
import dayjs from "dayjs";
import { OperationType } from "../types/operation.type";

export class GetOperation {
  constructor(period: string, from: string, to: string) {
    this.getOperationsByPeriod(period, from, to);
  }

  // происходит форматирование дат
  private async getOperationsByPeriod(period: string, from: string, to: string): Promise<OperationType> {
    let dateFrom: string = dayjs(from, "DD.MM.YYYY").format("YYYY-MM-DD");
    let dateTo: string = dayjs(to, "DD.MM.YYYY").format("YYYY-MM-DD");
    return await this.getOperation('period=' + period + '&dateFrom=' + dateFrom + '&dateTo=' + dateTo);
  }

  // информация о периоде и датах (делается HTTP-запрос)
  private async getOperation(date: string): Promise<OperationType> {
    return await CustomHttp.request(config.host + '/operations?' + date);
  }
}
