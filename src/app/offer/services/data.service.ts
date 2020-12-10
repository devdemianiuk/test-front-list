import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IData} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }


  public getData(): Observable<IData> {
    return this.http.get<IData>('assets/mocks/data.json');
  }
}
