import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { of } from "rxjs";

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
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
