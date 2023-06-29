import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(body: any): Promise<any> {
    console.log('login', body);
    let promise: any = new Promise((resolve, reject) => {
      this.http
        .post(`${environment.api}/auth/login`, body)
        .toPromise()
        .then((res: any) => {
          console.log('res', res);
          if (res) {
            sessionStorage.setItem('token', res.access_token);
            this.getProfile(res.access_token);
            resolve('success');
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  getProfile(token: string): Promise<any> {
    let promise: any = new Promise((resolve, reject) => {

    let headersToSend = new HttpHeaders();
    headersToSend = headersToSend
      .set('authorization', `Bearer ${token}`)
      .set('Content-Type','application/json');
      this.http
        .get(`${environment.api}/auth/profile`,  {
          headers: headersToSend,
        } )
        .toPromise()
        .then((res: any) => {
          console.log('res', res);
          if (res) {
            sessionStorage.setItem('profile', JSON.stringify(res));
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
}
