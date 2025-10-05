import { StartPage } from './pages/start-page/start-page';

export class App {
  private startPage: StartPage | null = null;
  public init(): void {
    this.startPage = new StartPage();
    document.body.append(this.startPage.element);
  }
}
