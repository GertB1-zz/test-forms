import { Injectable, EventEmitter } from '@angular/core';
import { Unit } from './data-model';

@Injectable()
export class UnitService {
  private units: Unit[];
  public changed: EventEmitter<Unit[]>;
  
  constructor() { 
    this.changed = new EventEmitter<Unit[]>();
    this.units = [
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
  }

  getAll(): Promise<Unit[]>{
    return Promise.resolve(this.units);
  }

  update(unit: Unit) {
    let index = this.units.findIndex((item) => item.id == unit.id);
    this.units[index] = unit;
    this.changed.emit(this.units);
  }
}
