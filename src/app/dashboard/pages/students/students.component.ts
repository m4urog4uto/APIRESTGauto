import { Component, OnDestroy } from '@angular/core';
import { StudentService } from '../../../core/services/student.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Student } from '../../../core/models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent {
  isLoading: boolean = false;
  studentList$: Observable<Student[] | null>;

  constructor(private studentService: StudentService) {
    this.studentList$ = this.studentService.getStudentList();
  }
}
