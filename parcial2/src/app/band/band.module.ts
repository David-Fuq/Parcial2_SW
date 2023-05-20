import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandListComponent } from './band-list/band-list.component';
import { BandDetailComponent } from './band-detail/band-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BandListComponent],
  declarations: [BandListComponent, BandDetailComponent]
})
export class BandModule { }
