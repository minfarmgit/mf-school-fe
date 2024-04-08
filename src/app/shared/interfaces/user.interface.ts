import { DbRecord } from "./db-record.interface";
import { UserPosition, UserRole } from "../enums";
import { Department } from "./department.interface";

export interface User extends DbRecord {
  username: string;
  email?: string;
  name: string;
  avatar?: string;
  avatarUrl?: string | null;
  position?: UserPosition;
  owner?: Department;
  roles?: UserRole[];
}
