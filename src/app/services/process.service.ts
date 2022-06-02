import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Logger } from './logger.service';

export let isDebugMode = environment.isDebugMode;
const noop = (): any => undefined;

@Injectable({
  providedIn: 'root'
})
export class ProcessService extends Logger{

  log(type: string, args?: any): void {
    if(isDebugMode){
      console.log(`type is ${type} | logger: ${args}`);
    }
  }
  override get info() {
    if (isDebugMode) {
      return console.info.bind(console);
    }else {
      return noop;
    }
  }

  override get warn() {
    if (isDebugMode) {
      return console.warn.bind(console);
    }else {
      return noop;
    }
  }

  override get error() {
    if (isDebugMode) {
      return console.error.bind(console);
    }else {
      return noop;
    }
  }
  constructor(){
    super();
  }
  

}
