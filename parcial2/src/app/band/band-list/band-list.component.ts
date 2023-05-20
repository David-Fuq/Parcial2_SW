import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { BandService } from '../band.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {
  bands: Array<Band> = [];
  oldie: number = 0;
  oldie_band: string = "";
  selected: Boolean =  false;

  selectedBand!: Band;

  constructor(private bandService: BandService) { }

  getBands(): void {
    this.bandService.getBands().subscribe((bands) => {
      this.bands = bands;


      let max: number = 0;
      let maxBand: string = "";
      bands.map((s) => {
        let actual = s.foundation_year;
        let resta = 2023 - actual;
        if (resta > max) {
          max = resta;
          maxBand = s.name;
        }
      });
      this.oldie = max;
      this.oldie_band = maxBand;
    });
  }

  ngOnInit() {
    this.getBands();
  }

  selectBand(band: Band): void {
    this.selectedBand = band;
    this.selected = true;
  }

}
