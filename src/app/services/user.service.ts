import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// const userData = of({
//     password: 'johnDoe123!',
//     email: 'john@doe.com'
//   })

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData = of({
    password: 'johnDoe123!',
    email: 'john@doe.com'
  });

  apiDataService(email: string, password: string): Observable<any>{
    // return this.userData.subscribe((data: any) => {
    //   if(email == data.email && password == data.password) {
    //     data['message'] = 'success';
    //     return of(data);
    //   }else {
    //     let t = {message: 'unsuccess'}
    //     return of(t);
    //   }
    // });
    return this.userData.pipe(
      map((data: any) => {
          if(email == data.email && password == data.password) {
            data['message'] = 'success';
            return data;
        }else {
          let t = {message: 'unsuccess'}
          return t;
        }
      })

    )
    // return of(this.userData);
  }
  constructor() { }
}
