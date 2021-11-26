import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {QuestionsState} from './models';
import {QuestionsStore} from './store';
import {Observable} from 'rxjs';
import {QuestionBase} from '../api/questions.models';

@Injectable({ providedIn: 'root' })
export class QuestionsQuery extends Query<QuestionsState> {
  constructor(store: QuestionsStore) {
    super(store);
  }

  public selectLoading(): Observable<boolean> {
    return this.select('loading');
  }

  public selectQuestions(): Observable<QuestionBase<string>[]> {
    return this.select('questions');
  }
}
