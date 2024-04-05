import { Component, ViewEncapsulation } from '@angular/core';
import { TuiButtonModule } from "@taiga-ui/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-app-menu',
  standalone: true,
  imports: [
    CommonModule,
    TuiButtonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.scss'
})
export class AppMenuComponent {
  public items = [
    {
      icon: 'tuiIconHomeLarge',
      name: 'Главная',
      path: '/app/home',
    },
    {
      icon: 'tuiIconClipboardLarge',
      name: 'Тесты',
      path: '/app/tests',
    },
    {
      icon: 'tuiIconPlayCircleLarge',
      name: 'Видео',
      path: '/app/videos',
    },
    {
      icon: 'tuiIconHelpCircleLarge',
      name: 'Опросы',
      path: '/app/quiz',
    },
    {
      icon: 'tuiIconInboxLarge',
      name: 'База знаний',
      path: '/app/knowledges',
    },
    {
      icon: 'tuiIconZapLarge',
      name: 'Семинары',
      path: '/app/streams',
    },
  ]
}
