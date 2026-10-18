import { Button } from '../button/button';
import GEAR_SVG from '../../assets/carbon_settings.svg';

export class SettingsButton extends Button {
  constructor(onClick: () => void) {
    super({
      variant: 'icon',
      className: 'settings-button',
      icon: GEAR_SVG,
      ariaLabel: 'Открыть настройки',
    });
    this.onClick(onClick);
  }
}
