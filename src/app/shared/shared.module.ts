import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { WordLimitPipe } from './word-limit.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    FooterComponent,
    WordLimitPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    FooterComponent,
    WordLimitPipe,
  ]
})
export class SharedModule { }
