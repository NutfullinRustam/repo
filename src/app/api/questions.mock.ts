import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


import {DropdownQuestion, QuestionBase, TextboxQuestion} from './questions.models';


@Injectable({ providedIn: 'root' })
export class MockQuestionsApi {
  getQuestions(): Observable<QuestionBase<string>[]> {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 5
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'secondName',
        label: 'Second name',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'middleName',
        label: 'Middle name',
        required: false,
        order: 3
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 4
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order)).pipe(delay(5000));
  }
}
