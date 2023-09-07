// src/app/leave.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leave } from './leave.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  private apiUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  postLeave(data: Leave): Observable<Leave> {
    return this.http.post<Leave>(`${this.apiUrl}/leave`, data);
  }

  getLeaves(): Observable<Leave[]> {
    return this.http.get<Leave[]>(`${this.apiUrl}/leaves`);
  }
}
