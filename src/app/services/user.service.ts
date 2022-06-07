import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData = of({
    password: 'johnDoe123!',
    email: 'john@doe.com'
  });

  apiDataService = (email: string, password: string): Observable<any> => {
    return this.userData.pipe(
      map((data: any) => {
          if(email == data.email && password == data.password) {
            return data;
        }else {
          throw new Error('validation error!');
        }
      })

    )
  }

    
  constructor() { }
}
