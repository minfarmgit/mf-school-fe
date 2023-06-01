import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FooterComponent } from './components/footer/footer.component';
import { TuiSvgModule } from "@taiga-ui/core";
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    TuiSvgModule,
    RouterLink,
  ],
  exports: [
    FooterComponent,
  ]
})
export class SharedModule { }
