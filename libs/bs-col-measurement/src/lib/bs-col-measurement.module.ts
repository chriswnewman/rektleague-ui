import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwelveColStickComponent } from './twelve-col-stick/twelve-col-stick.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TwelveColStickComponent],
  exports: [TwelveColStickComponent]
})
export class BsColMeasurementModule {}
