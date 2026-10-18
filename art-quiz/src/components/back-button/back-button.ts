import { Button } from '../button/button';
import BACK_SVG from '../../assets/icons/left.svg';
import style from './back-button.css';

export class BackButton extends Button {
  constructor(onClick: () => void) {
    super({ variant: 'icon', className: style['back-button'], icon: BACK_SVG, ariaLabel: 'Вернуться назад' });
    this.onClick(onClick);
  }
}
