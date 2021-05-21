import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { districtDetails, centerDetails, stateDetails } from './session';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DistrictdetailsService {

  private stateURL = 'https://cdn-api.co-vin.in/api/v2/admin/location/states';
  constructor(private http: HttpClient) { }
  // request for state Details //
  getstateData(): Observable<stateDetails> {
    return this.http.get<stateDetails>(this.stateURL);
  }

  //  request for district details
  getdistrictData(state): Observable<districtDetails> {
    return this.http.get<districtDetails>(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state}`);
  }

  //  request for session details
  getsessionData(districtId,currDate): Observable<centerDetails> { 
    return this.http.get<centerDetails>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${currDate}`);
  }
}
