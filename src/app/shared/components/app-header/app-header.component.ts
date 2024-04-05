import { Component, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";
import {
  TuiButtonModule, TuiDataListModule,
  TuiHostedDropdownComponent,
  TuiHostedDropdownModule, TuiSvgModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import { TuiAvatarModule, TuiInputModule } from "@taiga-ui/kit";
import { AsyncPipe, NgForOf } from "@angular/common";
import { DbService } from "../../services/db.service";
import { from, map, Observable } from "rxjs";
import { TuiLetModule } from "@taiga-ui/cdk";

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [
    RouterLink,
    TuiButtonModule,
    TuiAvatarModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
    TuiDataListModule,
    NgForOf,
    AsyncPipe,
    TuiLetModule
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @ViewChild(TuiHostedDropdownComponent) component?: TuiHostedDropdownComponent;
  public open = false;
  public currentUser: Observable<any>;
  constructor(
    public db: DbService,
  ) {
    this.currentUser = this.getCurrentUser();
    this.currentUser.subscribe(res => console.log(res));
  }

  private getCurrentUser(): Observable<any> {
    return from(this.db.pb.collection('users').authWithPassword('zidiks228@gmail.com', 'Karambatv123')).pipe(
      map(res => {
        if (res?.record) {
          res.record['avatarUrl'] = this.db.pb.getFileUrl(res.record, res.record['avatar']);
        }
        return res;
      })
    );
  }

  public onClick(): void {
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }
}
