import { Injectable } from '@angular/core';
import { DbService } from "../../../shared/services/db.service";
import { from, map, Observable, shareReplay } from "rxjs";
import { Test, TestDetails } from "../../../shared/interfaces";
import { getFilePath } from "../../../shared/functions/get-file-path.func";

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(
    private db: DbService,
  ) { }

  public getAllTests(): Observable<Test[]> {
    return from(this.db.pb.collection<Test>('tests').getFullList({
      sort: '-created',
    }));
  }

  public getTestById(id: string): Observable<TestDetails> {
    return from(this.db.pb.collection<Test>('tests').getOne(id)).pipe(
      map(res => {
        return {
          ...res,
          presentationUrl: getFilePath(res.presentation, res.collectionId, res.id),
        }
      }),
    )
  }
}
