import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Teacher } from '../models';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teacher$ = new BehaviorSubject<Teacher[] | null>(null);

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpClient.get<Teacher[]>(`${enviroment.apiBaseUrl}/teachers`)
      .subscribe({
        next: (teachers) => {
          this.teacher$.next(teachers);
        }
      })
  }

  getTeachers(): Observable<Teacher[] | null> {
    return this.teacher$.asObservable();
  }
}

