import type { ComponentOptions } from '../types/types';

export class Component<T extends keyof HTMLElementTagNameMap> {
  public readonly element: HTMLElementTagNameMap[T];
  protected readonly children: Component<keyof HTMLElementTagNameMap>[] = [];
  constructor(
    { tag, className = '', text = '', attributes }: ComponentOptions<T>,
    ...children: Component<keyof HTMLElementTagNameMap>[]
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;
    this.element.textContent = text;

    if (attributes) {
      Object.assign(this.element, attributes);
    }

    if (children) {
      this.appendChildren(children);
    }
  }

  public append(child: Component<keyof HTMLElementTagNameMap>): void {
    this.children.push(child);
    this.element.append(child.element);
  }

  public appendChildren(children: Component<keyof HTMLElementTagNameMap>[]): void {
    children.forEach((component) => {
      this.append(component);
    });
  }

  public destroy(): void {
    this.destroyChildren();
    this.element.remove();
  }

  public destroyChildren(): void {
    this.children.forEach((child) => {
      child.destroy();
    });
    this.children.length = 0;
  }
}
