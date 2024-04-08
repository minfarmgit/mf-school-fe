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
import { TuiLetModule } from "@taiga-ui/cdk";
import { AuthService } from "../../services/auth.service";
import { User } from "../../interfaces";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

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
    TuiLetModule,
    ReactiveFormsModule
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @ViewChild(TuiHostedDropdownComponent) component?: TuiHostedDropdownComponent;
  public open = false;
  public currentUser: User;
  public searchControl = new FormControl();

  constructor(
    public db: DbService,
    public auth: AuthService,
  ) {
    this.currentUser = auth.getCurrentUser();
  }

  public onClick(): void {
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }

  public logout(): void {
    this.auth.logout();
  }
}
