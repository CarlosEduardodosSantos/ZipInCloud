import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  findOcc(arr: any, key: any) {
    let arr2: any = [];

    arr.forEach((x: any) => {
      // Checking if there is any object in arr2
      // which contains the key value
      if (
        arr2.some((val: any) => {
          return val[key] == x[key];
        })
      ) {
        // If yes! then increase the occurrence by 1
        arr2.forEach((k: any) => {
          if (k[key] === x[key]) {
            k['ocorrencias']++;
          }
        });
      } else {
        // If not! Then create a new object initialize
        // it with the present iteration key's value and
        // set the occurrence to 1
        let a: any = {};
        a[key] = x[key];
        a['ocorrencias'] = 1;
        arr2.push(a);
      }
    });

    return arr2;
  }
}
