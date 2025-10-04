export type ComponentOptions<T> = {
  tag: T;
  className?: string;
  text?: string;
  attributes?: Record<string, string | boolean | number>;
};

export type ButtonOptions = Omit<ComponentOptions<unknown>, 'tag'> & {
  svgContent?: string;
};
