import { Component } from '@angular/core';
import {QuestionsService} from './store/service';
import {QuestionsQuery} from './store/query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private questionsService: QuestionsService,
    public questionsQuery: QuestionsQuery,
  ) {
    this.questionsService.loadQuestions().subscribe();
  }
}
