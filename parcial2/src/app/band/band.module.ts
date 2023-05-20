import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandListComponent } from './band-list/band-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BandListComponent],
  declarations: [BandListComponent]
})
export class BandModule { }
