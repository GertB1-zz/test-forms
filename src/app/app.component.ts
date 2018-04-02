import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Unit } from './data.model';
import { UnitService } from './unit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  //units: Unit[];
  units: Observable<Unit[]>;
  unit: Unit = null;
  constructor(private unitService: UnitService) {
  }

  ngOnInit() {
    // this.unitService.changed.subscribe(units => {
    //   this.units = units
    // });

    // this.unitService.getAll().then(units => {
    //   this.units = units;
    //   this.unit = this.units[0];
    // });
    this.units = this.unitService.data;
  }

  unitSelected(unit: Unit) {
    this.unit = unit;
  }
}
