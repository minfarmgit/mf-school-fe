import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TuiButtonModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { TuiAvatarModule, TuiInputModule } from "@taiga-ui/kit";

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [
    RouterLink,
    TuiButtonModule,
    TuiAvatarModule,
    TuiInputModule,
    TuiTextfieldControllerModule
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

}
