import type { ButtonOptions } from '../../types/types';
import { Component } from '../component';
import style from './button.css';

export class Button extends Component<'button'> {
  constructor(parameters: ButtonOptions) {
    super({
      tag: 'button',
      className: [style['button'], parameters.className].join(' '),
      text: parameters.text,
      attributes: {
        type: 'button',
        ...parameters.attributes,
      },
    });
    if (parameters.svgContent) {
      this.element.classList.remove(style['button']);
      this.element.insertAdjacentHTML('beforeend', parameters.svgContent);
    }
  }
  public setClickHandler(hanler: (event: MouseEvent) => void): void {
    this.element.addEventListener('click', hanler);
  }
}
