import { Component } from './components/component';
import { Footer } from './components/footer/footer';
import { MainMenu } from './components/main-menu/main-menu';
import { SettingsPage } from './pages/settings-page/settings-page';
import { DataService } from './services/data-service';
import { QuizService } from './services/quiz-service';
// import type { QuizMode } from './types/types';
import style from './style.css';
// import { QuizScreen } from './components/quiz-screen/quiz-screen';

export class App extends Component<'div'> {
  private dataService = DataService.getInstance();
  private quizService: QuizService | null = null;
  private currentScreen: Component<keyof HTMLElementTagNameMap> | null = null;

  private screenContainer = new Component({ tag: 'main', className: style['screen-container'] });
  private footer = new Footer();

  constructor() {
    super({ tag: 'div', className: style['app'] });
    this.appendChildren([this.screenContainer, this.footer]);
  }

  public async init(): Promise<void> {
    document.body.prepend(this.element);

    try {
      await this.dataService.loadPaintings();
    } catch {
      console.log('Не удалось загрузить данные.');

      // this.showError('Не удалось загрузить данные.');
      return;
    }

    this.showMainMenu();
  }

  private setBackGround(withImage: boolean): void {
    this.element.classList.toggle(style['app-with-bg'], withImage);
  }

  private showMainMenu(): void {
    this.clearScreen();

    this.setBackGround(true);

    const menu = new MainMenu({
      onArtistQuiz: (): void => this.startQuiz(/* 'artist' */),
      onPicturesQuiz: (): void => this.startQuiz(/* 'pictures' */),
      onSettings: (): void => this.showSettings(),
    });

    this.currentScreen = menu;
    this.screenContainer.append(menu);
  }

  private startQuiz(/* mode: QuizMode */): void {
    this.clearScreen();

    const paintings = this.dataService.getPaintings();
    this.quizService = new QuizService(paintings /* , mode */);

    // const screen = new QuizScreen(this.quizService, {
    //   onFinish: (score: number) => this.showResults(score),
    //   onExit: () => this.showMainMenu(),
    // });

    // this.currentScreen = screen;
    const screen = new Component({ tag: 'div', text: 'SCREEN HERE' });
    this.screenContainer.append(screen);
  }

  private showSettings(): void {
    this.clearScreen();
    this.setBackGround(false);
    const settingsScreen = new SettingsPage({
      onBack: (): void => this.showMainMenu(),
    });

    this.currentScreen = settingsScreen;
    this.screenContainer.append(settingsScreen);
  }

  private clearScreen(): void {
    if (this.currentScreen) {
      this.currentScreen.destroy();
      this.currentScreen = null;
    }
  }
}
