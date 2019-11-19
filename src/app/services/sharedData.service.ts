import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharedDataService {
  private _beginSource = new BehaviorSubject<boolean>(true);
  _currentBegin = this._beginSource.asObservable();
  changeBeginStatus(begin: boolean) {
    this._beginSource.next(begin);
  }

  private _mainSource = new BehaviorSubject<boolean>(false);
  _currentMain = this._mainSource.asObservable();
  changeMainStatus(main: boolean) {
    this._mainSource.next(main);
  }

  private _simulationItemSource = new BehaviorSubject<Array<any>>([]);
  _currentSimulationItem = this._simulationItemSource.asObservable();
  changeSimulationItemStatus(simulationItem:Array<any>) {
    this._simulationItemSource.next(simulationItem);
  }
}
