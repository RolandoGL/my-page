import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path:'my-experience', component: ProjectsComponent},
  { path:'my-contact', component: ContactComponent},
  { path:'my-education', component: EducationComponent},
  { path:'my-skills', component: SkillsComponent},
  { path:'my-experience/:id', component: ProjectComponent},
  { path:'**', redirectTo:'my-experience'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
