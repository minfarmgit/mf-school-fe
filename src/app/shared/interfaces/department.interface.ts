import { DbRecord } from "./db-record.interface";

export interface Department extends DbRecord {
  name: string;
  code: number;
  parent?: Department;
}
