import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewapplicantdialogComponent } from './newapplicantdialog/newapplicantdialog.component';
import { RecruitmentplatformComponent } from './recruitmentplatform/recruitmentplatform.component';

const routes: Routes = [
  {path: "recruitmentplatform", component: RecruitmentplatformComponent},
  {path: "", redirectTo:"/recruitmentplatform", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
