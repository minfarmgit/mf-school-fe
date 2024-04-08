import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppsComponent } from "./apps.component";

const routes: Routes = [
  {
    path: '',
    component: AppsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'knowledges',
        loadChildren: () => import('./knowledges/knowledges.module').then(m => m.KnowledgesModule),
      },
      {
        path: 'quiz',
        loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule),
      },
      {
        path: 'streams',
        loadChildren: () => import('./streams/streams.module').then(m => m.StreamsModule),
      },
      {
        path: 'tests',
        loadChildren: () => import('./tests/tests.module').then(m => m.TestsModule),
      },
      {
        path: 'videos',
        loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule),
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
