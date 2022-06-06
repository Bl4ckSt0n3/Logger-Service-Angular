import { Component, OnInit } from '@angular/core';
import { first, pipe } from 'rxjs';
import { LoggerService } from 'src/app/services/logger.service';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';


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
  constructor(
    private loggerService: LoggerService,
    private userService: UserService
    ) { }

  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  get f() {
    return this.loginForm.controls;
  }

  loggerInfo(args: string) {
    this.loggerService.info(`Level Info: ${args}`);
  }
  loggerWarn(args: string) {
    this.loggerService.warn(`Level Warn: ${args}`);
  }
  loggerError(args: string) {
    this.loggerService.warn(`Level Error: ${args}`);
  }

  userAuth() {
    this.userService.apiDataService(this.loginForm.get("emailFormControl")?.value, this.loginForm.get("passwordFormControl")?.value).subscribe({
      next: (success: any) => {
        // this.loggerInfo(success);
        console.log(success);
      },
      error: (e: any) => {
        this.loggerError(e);
      },
      complete: () => this.loggerInfo('Done !'),
    });
  }

  ngOnInit(): void {
    // this.loggerService.log('info', 'this is info log');
    // this.loggerService.info('Logger Component: info method');
  }
  // https://www.techiediaries.com/rxjs-of-tutorial-and-example/
}
