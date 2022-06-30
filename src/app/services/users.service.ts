import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  finalize,
  map,
  Observable,
  take,
} from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  loading = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    this.loading.next(true);

    return this.http.get<User[]>(`${this.baseUrl}/users`).pipe(
      map((response) => {
        return response;
      }),
      take(1),
      finalize(() => this.loading.next(false)),
      catchError((error) => {
        throw error;
      })
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  getLoadingState(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
