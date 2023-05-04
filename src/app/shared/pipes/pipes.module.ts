import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlErrorMessagesPipe } from './control-error-messages.pipe';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  declarations: [
    ControlErrorMessagesPipe,
    EllipsisPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlErrorMessagesPipe,
    EllipsisPipe
  ]
})

export class PipesModule { }
