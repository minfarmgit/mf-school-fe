import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, NgOptimizedImage } from "@angular/common";
import {
  TUI_PASSWORD_TEXTS,
  TUI_VALIDATION_ERRORS,
  TuiFieldErrorPipeModule,
  TuiInputPasswordModule,
  TuiIslandModule,
  TuiSelectModule
} from "@taiga-ui/kit";
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiErrorModule,
  TuiLoaderModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import { TuiStringHandler, tuiPure, TuiContextWithImplicit, TuiLetModule } from "@taiga-ui/cdk";
import { of } from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TuiIslandModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiFieldErrorPipeModule,
    AsyncPipe,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiLoaderModule,
    TuiDataListModule,
    TuiSelectModule,
    TuiLetModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: `Пустое поле!`,
      },
    },
    {
      provide: TUI_PASSWORD_TEXTS,
      useValue: of([``]),
    },
  ],
})
export class LoginComponent {
  public craList: { login: string, name: string }[] = [
    {
      login: 'cra16',
      name: 'ЦРА №16 Борисовского района',
    },
    {
      login: 'cra19',
      name: 'ЦРА №19 Березинского района',
    },
    {
      login: 'cra118',
      name: 'ЦРА №118 Вилейского района',
    },
  ];
  public formGroup: FormGroup = this.formBuilder.group( {
    login : [ window.localStorage.getItem('mf_login') || null, Validators.required ],
    password : [ null, Validators.required ],
  } );

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  public onSubmit(): void {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.invalid) {
      return;
    }
  }

  @tuiPure
  public stringify(
    items: { login: string, name: string }[],
  ): TuiStringHandler<TuiContextWithImplicit<string>> {
    const map = new Map(items.map(({login, name}) => [login, name] as [string, string]));

    return ({$implicit}: TuiContextWithImplicit<string>) => map.get($implicit) || ``;
  }

  public get f(): { [key: string]: AbstractControl; } { return this.formGroup.controls; }
}
