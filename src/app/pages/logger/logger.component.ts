import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

export interface ITab {
  id: number;
  title: string;
}

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  active = 1;
  constructor(private loggerService: LoggerService) { }

  // logger(type: string, args: string): void {
  //   if(type == 'info'){
  //     this.loggerService.log('warn', 'loggerService');
  //     this.loggerService.info(`Level Info: ${args}`);
  //   }else if(type == 'warn'){
  //     this.loggerService.warn(`Level Warn: `)
  //   }
  // }

  

  loggerInfo(args: string) {
    this.loggerService.info(`Level Info: ${args}`);
  }
  loggerWarn(args: string) {
    this.loggerService.warn(`Level Warn: ${args}`);
  }
  loggerError(args: string) {
    this.loggerService.warn(`Level Error: ${args}`);
  }

  ngOnInit(): void {
    // this.loggerService.log('info', 'this is info log');
    // this.loggerService.info('Logger Component: info method');
  }
  // https://www.techiediaries.com/rxjs-of-tutorial-and-example/
}
