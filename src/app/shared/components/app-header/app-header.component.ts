import { Component, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";
import {
  TuiButtonModule, TuiDataListModule,
  TuiHostedDropdownComponent,
  TuiHostedDropdownModule, TuiSvgModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import { TuiAvatarModule, TuiInputModule } from "@taiga-ui/kit";
import { NgForOf } from "@angular/common";

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
    NgForOf
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @ViewChild(TuiHostedDropdownComponent) component?: TuiHostedDropdownComponent;
  public open = false;

  public onClick(): void {
    this.open = false;
    this.component?.nativeFocusableElement?.focus();
  }
}
