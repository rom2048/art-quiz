import { shuffleArray } from '../helpers/shuffle-array';
import type { Painting, Question, /* QuizMode */ QuizState } from '../types/types';

export class QuizService {
  private state: QuizState;
  private paintings: Painting[] = [];

  constructor(paintings: Painting[] /* mode: QuizMode */) {
    this.paintings = paintings;
    this.state = {
      currentQuestionIndex: 0,
      score: 0,
      questions: [],
      isFinished: false,
    };
    this.generateQuestions();
  }

  public reset(): void {
    this.state = {
      currentQuestionIndex: 0,
      score: 0,
      questions: [],
      isFinished: false,
    };
    this.generateQuestions();
  }

  public getState(): QuizState {
    return { ...this.state };
  }

  public getCurrentQuestion(): Question | null {
    if (this.state.isFinished || this.state.currentQuestionIndex >= this.state.questions.length) {
      return null;
    }

    return this.state.questions[this.state.currentQuestionIndex];
  }

  public answerQuestion(answer: string): boolean {
    const currentQuestion = this.getCurrentQuestion();
    if (!currentQuestion) {
      return false;
    }

    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) {
      this.state.score++;
    }

    this.state.currentQuestionIndex++;

    if (this.state.currentQuestionIndex >= this.state.questions.length) {
      this.state.isFinished = true;
    }

    return isCorrect;
  }

  private generateQuestions(): void {
    // Берем все картины и перемешиваем
    const shuffledPaintings = shuffleArray(this.paintings);

    // Для примера берем 10 вопросов (можно изменить)
    const questionCount = Math.min(10, shuffledPaintings.length);
    const selectedPaintings = shuffledPaintings.slice(0, questionCount);

    this.state.questions = selectedPaintings.map((painting) => {
      // Получаем 3 случайных неверных ответа
      const otherPaintings = this.paintings.filter((p) => p.name !== painting.name && p.author !== painting.author);
      const shuffledOthers = shuffleArray(otherPaintings);
      const wrongOptions = shuffledOthers.slice(0, 3).map((p) => `${p.author} - "${p.name}"`);

      const correctAnswer = `${painting.author} - "${painting.name}"`;
      const options = shuffleArray([correctAnswer, ...wrongOptions]);

      return {
        painting,
        options,
        correctAnswer,
      };
    });
  }
}
