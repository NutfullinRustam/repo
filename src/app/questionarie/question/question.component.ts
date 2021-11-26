import {Component, Input} from '@angular/core';

import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../api/questions.models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  get isLast() { return Object.keys(this.form.controls).length === this.question.order; }
}
