import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import '@angular/common/locales/global/ru';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { of } from "rxjs";
import { DATE_PIPE_DEFAULT_OPTIONS } from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule
    ],
    providers: [
      { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
      { provide: TUI_LANGUAGE, useValue: of(TUI_RUSSIAN_LANGUAGE) },
      { provide: LOCALE_ID, useValue: "ru-RU" },
      {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {timezone: '+0'}},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
