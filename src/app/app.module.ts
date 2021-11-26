import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionarieComponent } from './questionarie/questionarie.component';
import { QuestionComponent } from './questionarie/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionarieComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
