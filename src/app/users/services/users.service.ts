import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '@environment';

import { IUserDetail } from '@app/users/models/user.model';

@Injectable()
export class UsersService {
  private baseUrl: string;
  private users: IUserDetail[];

  constructor(
    private http: HttpClient
  ) {
    const resource = 'users';
    const apiBaseUrl = environment.apiBaseUrl.placeholder;
    this.baseUrl = `${apiBaseUrl}/${resource}`;
  }

  get(): Observable<IUserDetail[]> {
    // Light cache technique.
    // TODO: use @ng/rx Store to manage it.
    if (!this.users) {
      return this.fetch();
    } else {
      return of(this.users);
    }
  }

  private fetch(): Observable<IUserDetail[]> {
    return this.http.get<IUserDetail[]>(this.baseUrl).pipe(
      tap(users => this.users = users)
    );
  }
}