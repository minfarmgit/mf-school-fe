import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from "@angular/router";
import { TuiButtonModule, TuiSvgModule } from "@taiga-ui/core";
@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WelcomeComponent,
      }
    ]),
    TuiButtonModule,
    TuiSvgModule,
  ]
})
export class WelcomeModule { }
