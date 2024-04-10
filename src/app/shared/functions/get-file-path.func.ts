import { environment } from "../../../environments/environment";

export function getFilePath(img: string, collectionId: string, recordId: string): string {
  return `${environment.dbHost}/api/files/${collectionId}/${recordId}/${img}`;
}
