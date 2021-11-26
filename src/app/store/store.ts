import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { QuestionsState } from './models';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ftp-settings', resettable: true })
export class QuestionsStore extends Store<QuestionsState> {
  constructor() {
    super({
      questions: [],
      loading: false,
      error: null
    });
  }
}
