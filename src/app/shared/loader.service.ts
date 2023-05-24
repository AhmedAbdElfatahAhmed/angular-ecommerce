import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
loadingSub = new BehaviorSubject<boolean>(false);
  constructor() { }

  setLoadingValue(val:boolean)
  {
   this.loadingSub.next(val);
  }
}
