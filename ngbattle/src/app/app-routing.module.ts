import { RanksComponent } from './ranks/ranks.component';
import { ChooseComponent } from './choose/choose.component';
import { ResultComponent } from './result/result.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", component: ChooseComponent},
  {path: "results", component: ResultComponent},
  {path: "rankings", component: RanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
