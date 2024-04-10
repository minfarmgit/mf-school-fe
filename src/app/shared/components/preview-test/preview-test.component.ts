import { Component, Input } from '@angular/core';
import { TuiButtonModule, TuiSvgModule } from "@taiga-ui/core";
import { TuiBadgeModule } from "@taiga-ui/kit";
import { Test } from "../../interfaces";
import { DatePipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-preview-test',
  standalone: true,
  imports: [
    TuiSvgModule,
    TuiButtonModule,
    TuiBadgeModule,
    DatePipe,
    RouterLink,
  ],
  templateUrl: './preview-test.component.html',
  styleUrl: './preview-test.component.scss'
})
export class PreviewTestComponent {
  @Input() public data!: Test;
}
