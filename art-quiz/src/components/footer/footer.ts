import { Component } from '../component';
import RSLogo from '../../assets/rs-logo.svg';
import GitLogo from '../../assets/git-logo.svg';
import style from './footer.css';

export class Footer extends Component<'footer'> {
  constructor() {
    super({ tag: 'footer', className: style['footer'] });
    this.render();
  }

  private render(): void {
    const schoolLink = new Component(
      {
        tag: 'a',
        className: style['link'],
        attributes: {
          href: 'https://rs.school/',
          target: '_blank',
        },
      },
      new Component({ tag: 'span', text: 'School' })
    );
    schoolLink.element.insertAdjacentHTML('afterbegin', RSLogo);

    const authorLink = new Component(
      {
        tag: 'a',
        className: style['link'],
        attributes: {
          href: 'https://github.com/rom2048',
          target: '_blank',
        },
      },
      new Component({ tag: 'span', text: '@rom2048' })
    );
    authorLink.element.insertAdjacentHTML('afterbegin', GitLogo);

    const yearCreation = new Component({
      tag: 'p',
      className: style['year-creation-text'],
      text: '2025',
    });

    this.appendChildren([schoolLink, authorLink, yearCreation]);
  }
}
