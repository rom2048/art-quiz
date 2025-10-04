declare module '*.css' {
  const style: Record<string, string>;
  export default style;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
