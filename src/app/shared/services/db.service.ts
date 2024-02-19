import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DbService {
  public pb: PocketBase;

  constructor() {
    this.pb = new PocketBase(environment.dbHost);
  }
}
