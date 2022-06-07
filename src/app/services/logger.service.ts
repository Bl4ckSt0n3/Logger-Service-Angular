import { Injectable } from '@angular/core';

export abstract class Logger {
  private _info: any;
  public get info(): any {
    return this._info;
  }
  public set info(value: any) {
    this._info = value;
  }

  private _warn: any;
  public get warn(): any {
    return this._warn;
  }
  public set warn(value: any) {
    this._warn = value;
  }
  
  private _error: any;
  public get error(): any {
    return this._error;
  }
  public set error(value: any) {
    this._error = value;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService extends Logger{

  log(type: string, args?: any): void {}

  constructor()
  {
    super();
  }

}
