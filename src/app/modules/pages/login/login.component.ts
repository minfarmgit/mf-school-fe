import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TUI_PASSWORD_TEXTS,
  TUI_VALIDATION_ERRORS,
} from "@taiga-ui/kit";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TuiStringHandler, tuiPure, TuiContextWithImplicit } from "@taiga-ui/cdk";
import { of } from "rxjs";
import { AuthService } from "../../../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public isOwner: boolean = false;
  public craList: { login: string, name: string }[] = [
    {
      login: 'zidiks228@gmail.com',
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
    private auth: AuthService,
    private router: Router,
  ) { }

  public onSubmit(): void {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.invalid) {
      return;
    }

    const formValue = this.formGroup.value;

    this.auth.login(formValue.login, formValue.password).subscribe(
      res => {
        if (res.token) {
          this.router.navigate(['/app'])
        }
      },
      error => {
        if (error.status === 400) {
          console.log('Не удалось авторизироваться');
        }
      }
    );
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
