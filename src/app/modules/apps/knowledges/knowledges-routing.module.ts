import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { KnowledgesComponent } from "./knowledges.component";

const routes: Routes = [
  {
    path: '',
    component: KnowledgesComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgesRoutingModule { }
