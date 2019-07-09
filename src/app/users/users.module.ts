import { NgModule } from '@angular/core';

// Modules
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '@app/shared/shared.module';

// Services
import * as fromServices from './services';

// Containers
import * as fromContainers from './containers';

// Components
import * as fromComponents from './components';

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: [
    ...fromServices.services
  ],
})
export class UsersModule {}