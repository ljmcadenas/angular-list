import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import * as fromComponents from './components';

// Pipes
import * as fromPipes from './pipes';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromPipes.pipes
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ...fromComponents.components,
    ...fromPipes.pipes,
  ],
  providers: [],
})
export class SharedModule {}