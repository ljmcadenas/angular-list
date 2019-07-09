import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { RouterService } from '@app/core/services/router.service';

@Component({
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersLayoutComponent implements OnInit {
  title: string;

  constructor(
    private routerService: RouterService,
  ) {}

  ngOnInit(): void {
    this.title = this.routerService.primaryRouteData.title;
  }
}
