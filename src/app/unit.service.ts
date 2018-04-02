import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Unit } from './data.model';

@Injectable()
export class UnitService {
  //private units: Unit[];
  //public changed: EventEmitter<Unit[]>;

  private dataSource = new BehaviorSubject<Unit[]>([]);
  data = this.dataSource.asObservable();

  
  constructor() { 
    //this.changed = new EventEmitter<Unit[]>();
    let units = [
      { 
        id: 1, 
        name: "Unit 1", 
        alarms: [
          { 
            name: "Alarm 1",
            description: ""
          },
          { 
            name: "Alarm 2",
            description: ""
          }
        ]
      },
      { 
        id: 2, 
        name: "Unit 2", 
        alarms: [
          { 
            name: "Alarm 1",
            description: ""
          },
          { 
            name: "Alarm 2",
            description: ""
          },
          { 
            name: "Alarm 3",
            description: ""
          }
        ]
      }
    ];
    this.dataSource.next(units);
  }

  // getAll(): Promise<Unit[]>{
  //   return Promise.resolve(this.units);
  // }

  update(unit: Unit) {
    console.log(unit);
    let units = this.dataSource.value;
    let index = units.findIndex((item) => item.id == unit.id);
    units[index] = unit;
    this.dataSource.next(units);
  

    // let index = this.units.findIndex((item) => item.id == unit.id);
    // this.units[index] = unit;
    // //this.changed.emit(this.units);
    // this.dataSource.next(this.units);
  }
}
