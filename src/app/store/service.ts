import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

import { MockQuestionsApi } from '../api/questions.mock';
import { QuestionsQuery } from './query';
import { QuestionsStore } from './store';
import {QuestionBase} from '../api/questions.models';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  constructor(
    private api: MockQuestionsApi,
    private store: QuestionsStore,
    private query: QuestionsQuery
  ) {}

  public loadQuestions(): Observable<void> {
    this.store.update({ loading: true });
    return this.api.getQuestions().pipe(
      tap((questions) => {
        this.store.update({ questions });
        this.store.update({ loading: false });
      }),
      mapTo(void 0)
    );
  }

  public updateQuestions(questions: QuestionBase<string>[]): void {
    this.store.update({ questions });
  }
}
