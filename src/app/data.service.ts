import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


private dataSourse = new BehaviorSubject<string>("default data");
currentData = this.dataSourse.asObservable();

constructor() {}


changeData( data: string ) {
  this.dataSourse.next( data );
}

}
