import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Unit } from './data.model';
import { UnitService } from './unit.service';
import { UnitEditComponent } from './unit-edit/unit-edit.component';

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
  
  @ViewChild(UnitEditComponent)
  private unitEditComponent: UnitEditComponent;
  
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
    this.unitService.data.subscribe(data => {
      this.unit = data[0];
    });
  }

  unitSelected(unit: Unit) {
    this.unitEditComponent.updateData(this.unit);
    this.unit = unit;
  }
}
