import { Component } from '@angular/core';

import { GlobalSearchService } from '@app/core/services/global-search.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent {

  constructor(
    private globalSearchService: GlobalSearchService
  ) { }

  search(query: string): void {
    this.globalSearchService.dispatchSearch(query);
  }
}
