import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Data, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  navigationEnd$: Observable<NavigationEnd>;
  primaryRouteData$: Observable<Data>;

  constructor(
    private router: Router
  ) {
    this.initObservables();
  }

  get lastPrimaryRoute(): ActivatedRoute {
    let child: ActivatedRoute;
    let route = this.router.routerState.root;

    do {
      child = route;
      route = this.getPrimaryChildRoute(route);
    } while (route);

    return child;
  }

  get primaryRouteData(): Data {
    return this.lastPrimaryRoute.snapshot.pathFromRoot.reduce(
      (data, route) => Object.assign({}, data, route.data),
      {},
    );
  }

  private initObservables() {
    this.navigationEnd$ = (this.router.events as Observable<NavigationEnd>)
      .pipe(
        filter(e => e instanceof NavigationEnd),
      );

    this.primaryRouteData$ = this.navigationEnd$
      .pipe(
        map(() => this.primaryRouteData),
      );
  }

  private getPrimaryChildRoute(route: ActivatedRoute): ActivatedRoute {
    const children = route.children || [];
    const primary = children.filter(child => child.outlet === 'primary');
    return primary.length ? primary[0] : null;
  }
}
