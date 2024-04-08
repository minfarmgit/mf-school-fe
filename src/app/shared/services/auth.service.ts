import { Injectable } from '@angular/core';
import { DbService } from "./db.service";
import { BaseAuthStore, RecordAuthResponse } from "pocketbase";
import { from, Observable } from "rxjs";
import { User } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private db: DbService,
  ) { }

  public get authStore(): BaseAuthStore {
    return this.db.pb.authStore;
  }

  public getCurrentUser(): User {
    const user = Object.assign({}, this.db.pb.authStore.model as User);
    if (user) {
      user.avatarUrl = user.avatar ? this.db.pb.getFileUrl(user, user.avatar) : null;
    }
    return user;
  }

  public login(username: string, password: string): Observable<RecordAuthResponse<User>> {
    return from(this.db.pb.collection('users').authWithPassword<User>(username, password));
  }

  public logout(): void {
    this.db.pb.authStore.clear();
    location.reload();
  }
}
