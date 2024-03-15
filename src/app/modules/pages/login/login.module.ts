import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { TuiFieldErrorPipeModule, TuiInputPasswordModule, TuiIslandModule, TuiSelectModule } from "@taiga-ui/kit";
import { ReactiveFormsModule } from "@angular/forms";
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiErrorModule,
  TuiLoaderModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import { TuiLetModule } from "@taiga-ui/cdk";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      }
    ]),
    TuiSelectModule,
    TuiIslandModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiDataListModule,
    TuiLoaderModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiLetModule,
    NgOptimizedImage,
  ]
})
export class LoginModule { }
