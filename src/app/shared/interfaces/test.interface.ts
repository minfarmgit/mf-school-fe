import { DbRecord } from "./db-record.interface";

export interface Test extends DbRecord {
  from: string;
  to: string;
  presentation: string;
  questions: any;
  theme: string;
}

export interface TestDetails extends Test {
  presentationUrl: string;
}

