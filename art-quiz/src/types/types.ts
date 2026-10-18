export type ComponentOptions<T extends keyof HTMLElementTagNameMap> = {
  tag: T;
  className?: string;
  text?: string;
  attributes?: Partial<HTMLElementTagNameMap[T]>;
};

export type Painting = {
  author: string;
  name: string;
  year: string;
  imageNum: string;
};

export type Question = {
  painting: Painting;
  options: string[];
  correctAnswer: string;
};

export type QuizState = {
  currentQuestionIndex: number;
  score: number;
  questions: Question[];
  isFinished: boolean;
};

export type ButtonVariant = 'primary' | 'secondary' | 'icon' | 'link';

export type QuizMode = 'artist' | 'pictures';

export type ButtonOptions = {
  text?: string;
  variant?: ButtonVariant;
  className?: string;
  attributes?: Partial<HTMLButtonElement>;
  icon?: string;
  ariaLabel?: string;
};

// export type ButtonOptions = Omit<ComponentOptions<unknown>, 'tag'> & {
//   svgContent?: string;
// };
