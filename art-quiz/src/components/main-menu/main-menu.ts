import { Button } from '../button/button';
import { Component } from '../component';
import { QuizTitle } from '../logo/quiz-title';
import { SettingsButton } from '../settings-button/settings-button';
import style from './main-menu.css';

type MainMenuCallbacks = {
  onArtistQuiz: () => void;
  onPicturesQuiz: () => void;
  onSettings: () => void;
};

export class MainMenu extends Component<'div'> {
  constructor(callbacks: MainMenuCallbacks) {
    super({ tag: 'div', className: style['main-menu'] });
    const settings = new SettingsButton(callbacks.onSettings);

    const logo = new QuizTitle();

    const artistQuiz = new Button({
      text: 'Artist quiz',
      variant: 'secondary',
      className: style['main-menu-action'],
    }).onClick(callbacks.onArtistQuiz);

    const picturesQuiz = new Button({
      text: 'Pictures quiz',
      variant: 'secondary',
      className: style['main-menu-action'],
    }).onClick(callbacks.onPicturesQuiz);

    this.appendChildren([settings, logo, artistQuiz, picturesQuiz]);
  }
}
