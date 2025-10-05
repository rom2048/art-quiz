import { Button } from '../../components/button/button';
import { Component } from '../../components/component';
import { Footer } from '../../components/footer/footer';
import SettingIcon from '../../assets/carbon_settings.svg';
import style from './start-page.css';
import { QuizTitle } from '../../components/logo/quiz-title';

export class StartPage extends Component<'section'> {
  constructor() {
    super({ tag: 'section', className: style['start-page'] });
    const settingButton = new Button({ className: style['settings-button'], svgContent: SettingIcon });
    const logo = new QuizTitle();

    const artistQuizButton = new Button({
      className: [style['quiz-button'], style['artist-quiz-button']].join(' '),
      text: 'Artist quiz',
    });
    const picturesQuizButton = new Button({
      className: [style['quiz-button'], style['pictures-quiz-button']].join(' '),
      text: 'Pictures quiz',
    });

    const buttonContainer = new Component(
      { tag: 'div', className: style['buttons-container'] },
      artistQuizButton,
      picturesQuizButton
    );

    this.appendChildren([settingButton, logo, buttonContainer, new Footer()]);
  }
}
