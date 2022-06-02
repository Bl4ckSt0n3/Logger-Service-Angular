import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggerComponent } from './pages/logger/logger.component';

const routes: Routes = [
  { path: 'loggertest', component: LoggerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
