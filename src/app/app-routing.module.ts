import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { AuthGuard } from "./shared/router-guards/auth.guard";
import { UnAuthGuard } from "./shared/router-guards/unauth.guard";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/pages/welcome/welcome.module').then(m => m.WelcomeModule),
      },
      {
        path: 'login',
        loadChildren: () => import('./modules/pages/login/login.module').then(m => m.LoginModule),
        canActivate: [UnAuthGuard],
      },
      {
        path: 'app',
        loadChildren: () => import('./modules/apps/apps.module').then(m => m.AppsModule),
        canActivate: [AuthGuard],
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
