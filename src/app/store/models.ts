import {QuestionBase} from '../api/questions.models';

export interface QuestionsState {
  questions: QuestionBase<string>[];
  loading: boolean;
  error: Error | null;
}
