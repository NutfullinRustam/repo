import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

import {QuestionControlService} from '../question-control.service';
import {QuestionBase} from '../api/questions.models';
import {QuestionsService} from '../store/service';

@Component({
  selector: 'app-questionarie',
  templateUrl: './questionarie.component.html',
  providers: [ QuestionControlService ],
})
export class QuestionarieComponent implements OnInit {

  @Input() questions!: QuestionBase<string>[];
  form!: FormGroup;
  payLoad = '';

  constructor(
    private qcs: QuestionControlService,
    private questionsService: QuestionsService,
  ) { }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit(): void {
    this.questionsService.updateQuestions(this.questions);
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  onReset(): void {
    this.payLoad = '';
    this.questionsService.loadQuestions().subscribe();
  }
}
