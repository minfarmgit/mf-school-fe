import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TuiButtonModule } from "@taiga-ui/core";

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [
    RouterLink,
    TuiButtonModule
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

}
