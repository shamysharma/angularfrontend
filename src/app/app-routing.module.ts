import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // private apiUrl = 'http://localhost:4200';

  // constructor(private http: HttpClient) {}

  // postLeave(data: Leave): Observable<Leave> {
  //   return this.http.post<Leave>(`${this.apiUrl}/leave`, data);
  // }

  // getLeaves(): Observable<Leave[]> {
  //   return this.http.get<Leave[]>(`${this.apiUrl}/leaves`);
  // }
 }
