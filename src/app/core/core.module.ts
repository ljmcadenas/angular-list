import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '@app/shared/shared.module';

// Containers
import * as fromContainers from './containers';

@NgModule({
  declarations: [
    ...fromContainers.containers
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    ...fromContainers.containers
  ],
  providers: [],
})
export class CoreModule {}