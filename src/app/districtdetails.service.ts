import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { districtDetails, sessionDetails, stateDetails } from './session';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DistrictdetailsService {

  private stateURL = 'https://cdn-api.co-vin.in/api/v2/admin/location/states';
  constructor(private http: HttpClient) { }
  // request for state Details //
  getstateData(): Observable<any> {
    return this.http.get<any>(this.stateURL);
  }

  //  request for district details
  getdistrictData(state): Observable<any> {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state}`);
  }

  //  request for session details
  getsessionData(districtId,currDate): Observable<any> {
 
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${currDate}`);
  }
}
