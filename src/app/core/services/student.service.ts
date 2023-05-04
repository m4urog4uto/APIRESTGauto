import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Student } from '../models';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students$ = new BehaviorSubject<Student[] | null>(null);

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpClient.get<Student[]>(`${enviroment.apiBaseUrl}/students`)
      .subscribe({
        next: (students) => {
          const studentsMap = students.map((obj) => ({
            ...obj,
            isApproved: obj.qualification >= 7
          }))
          this.students$.next(studentsMap);
        }
      })
  }

  getStudentList(): Observable<Student[] | null> {
    return this.students$.asObservable();
  }
}
