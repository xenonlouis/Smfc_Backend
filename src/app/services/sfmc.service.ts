// src/app/services/sfmc.service.ts

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from "./auth.service";
import {DataExtension} from "../components/Models/dataextension.model";

@Injectable({
  providedIn: 'root'
})
export class SfmcService {

  private apiUrl = 'http://localhost:8080/api/sfmc';

  constructor(private http: HttpClient , private authService: AuthService) { }

  getAutomations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/automations`);
  }
  createAutomation(automation: any): Observable<any> {
    if (typeof automation === 'boolean') {
      console.error('Invalid automation data', automation);
      return throwError('Invalid automation data');
    }
    return this.http.post(`${this.apiUrl}/automations`, automation, { headers: this.createHeaders() });
  }

  deleteAutomation(id: string | undefined): Observable<any> {
    console.log("id is : " + id);
    if (!id) {
      console.error('Invalid automation ID', id);
      return throwError('Invalid automation ID');
    }
    return this.http.delete(`${this.apiUrl}/automations/${id}`, { headers: this.createHeaders() });
  }
  private createHeaders(): HttpHeaders {
    const token = this.authService.getAccessToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  getDataExtensions(): Observable<DataExtension[]> {
    return this.http.get<DataExtension[]>(`${this.apiUrl}/data-extensions`);
  }

  getDataExtensionRows(dataExtensionKey: string): Observable<any[]> {
    const headers = this.createHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/data-extensions/rows?key=${dataExtensionKey}`, { headers });
  }

  getDataExtensionDetails(id: string): Observable<DataExtension> {
    return this.http.get<DataExtension>(`${this.apiUrl}/data-extensions/${id}`);
  }


  getJourneys(): Observable<any> {
    return this.http.get(`${this.apiUrl}/journeys`);
  }

  getJourneyDetails(journeyId: string): Observable<any> {
    const url = `${this.apiUrl}/interaction/v1/interactions/${journeyId}`;
    return this.http.get(url, { headers: this.createHeaders() });
  }



  private handleError(error: HttpErrorResponse, originalRequest: () => Observable<any>): Observable<any> {
    if (error.status === 401) {
      return this.authService.refreshToken().pipe(
        switchMap(() => {
          const headers = this.createHeaders();
          return originalRequest();
        }),
        catchError(err => {
          return throwError(err);
        })
      );
    }
    return throwError(error);
  }
}
