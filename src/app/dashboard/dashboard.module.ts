import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { RouterModule, Routes } from '@angular/router';
import { DirectorGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: 'alumnos',
    component: StudentsComponent
  },
  {
    path: 'profesores',
    canActivate: [DirectorGuard],
    component: TeachersComponent,
  },
  {
    path: '**',
    redirectTo: 'alumnos',
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    StudentsComponent,
    TeachersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
