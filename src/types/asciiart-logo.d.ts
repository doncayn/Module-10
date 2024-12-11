declare module 'asciiart-logo' {
  export default function config(options: {
    name?: string;
    color?: string;
    lineChars?: number;
    padding?: number;
    margin?: number;
    borderColor?: string;
    logoColor?: string;
    textColor?: string;
  }): any;

  export function render(options: LogoConfig): void;
}
