import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {
  search$: Observable<string>;
  private searchSource: BehaviorSubject<string>;

  constructor() {
    this.searchSource = new BehaviorSubject<string>('');
    this.search$ = this.searchSource.asObservable();
  }

  dispatchSearch(query: string) {
    this.searchSource.next(query);
  }
}
