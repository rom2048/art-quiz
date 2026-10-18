import type { ButtonOptions } from '../../types/types';
import { Component } from '../component';
import style from './button.css';

export class Button extends Component<'button'> {
  private onClickHandler: ((event: MouseEvent) => void) | null = null;

  constructor({ text = '', variant = 'primary', className = '', attributes, icon, ariaLabel }: ButtonOptions) {
    super({
      tag: 'button',
      className: [style['button'], style[`button--${variant}`], className].join(' '),
      text: icon ? '' : text,
      attributes: {
        type: 'button',
        ...(ariaLabel ? { 'aria-label': ariaLabel } : {}),
        ...attributes,
      },
    });
    if (icon && ariaLabel) {
      this.element.innerHTML = `
      ${icon}
      <span class=${style['visually-hidden']}>${ariaLabel}</span>
      `;
      // this.element.insertAdjacentHTML('beforeend', icon);
    }
  }
  public onClick(handler: (event: MouseEvent) => void): this {
    if (this.onClickHandler) {
      this.element.removeEventListener('click', this.onClickHandler);
    }
    this.onClickHandler = handler;
    this.element.addEventListener('click', handler);

    return this;
  }

  public setDisabled(disabled: boolean): void {
    this.element.disabled = disabled;
  }

  public override destroy(): void {
    if (this.onClickHandler) {
      this.element.removeEventListener('click', this.onClickHandler);
      this.onClickHandler = null;
    }
    super.destroy();
  }
}
