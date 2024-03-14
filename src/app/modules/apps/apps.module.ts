import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps.component';
import { AppsRoutingModule } from "./apps-routing.module";
import { AppHeaderComponent } from "../../shared/components/app-header/app-header.component";

@NgModule({
  declarations: [
    AppsComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    AppHeaderComponent,
  ]
})
export class AppsModule { }
