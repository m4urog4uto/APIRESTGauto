import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/core/models';
import { StudentService } from 'src/app/core/services/student.service';
import { TeacherService } from '../../../core/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  isLoading: boolean = false;
  teacherList$: Observable<Teacher[] | null>;

  constructor(private teacherService: TeacherService) {
    this.teacherList$ = this.teacherService.getTeachers();
  }
}
