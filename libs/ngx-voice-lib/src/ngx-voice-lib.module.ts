
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FirstComponent],
  exports: [FirstComponent]
})
export class NgxVoiceLibModule {}
