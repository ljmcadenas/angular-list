import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// Services
import { UsersService } from '@app/users/services';
import { GlobalSearchService } from '@app/core/services/global-search.service';

import { IUserDetail } from '@app/users/models/user.model';

@Component({
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  users$: Observable<IUserDetail[]>;

  constructor(
    private usersService: UsersService,
    private globalSearchService: GlobalSearchService
  ) {}

  ngOnInit(): void {
    this.users$ = this.globalSearchService.search$.pipe(
      map((query: string) => query.toLowerCase()),
      switchMap(query => {
        return this.usersService.get().pipe(
          map(users => !query ? users : users.filter(user => user.name.toLowerCase().includes(query)))
        );
      })
    );
  }
}
