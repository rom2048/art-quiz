import { Component } from '../component';
import style from './logo.css';

export class QuizTitle extends Component<'h1'> {
  private artSpan: Component<'span'>;
  constructor() {
    super({ tag: 'h1', className: style['simple-art-title'] });
    this.artSpan = new Component({ tag: 'span', className: style['art-word'], text: 'Art' });
    const quizSpan = new Component({ tag: 'span', text: 'Quiz' });
    this.append(this.artSpan);
    this.element.append(document.createTextNode(' '));
    this.append(quizSpan);
  }

  public setColor(color: string): void {
    this.artSpan.element.style.color = color;
  }
}
