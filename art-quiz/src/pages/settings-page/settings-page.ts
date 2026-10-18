import { BackButton } from '../../components/back-button/back-button';
import { Component } from '../../components/component';

export type SettingsPageCallbacks = {
  onBack: () => void;
};

export class SettingsPage extends Component<'div'> {
  constructor(callbacks: SettingsPageCallbacks) {
    super({ tag: 'div', className: 'settings-page' });

    // Кнопка "Назад"
    const backButton = new BackButton(callbacks.onBack);

    // Заголовок
    const title = new Component({
      tag: 'h2',
      className: 'settings-page__title',
      text: 'Settings',
    });

    // Контент настроек (пока пустой)
    const content = new Component({
      tag: 'div',
      className: 'settings-page__content',
      text: 'Здесь будут настройки...',
    });

    this.appendChildren([backButton, title, content]);
  }
}
