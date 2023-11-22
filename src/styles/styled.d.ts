import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText:string,
      secondaryText:string,
      primary:string,
      secondary:string,
      background:string,
      borderColor: string,
      backgroundHeader: string,
      red: string,
      shadow: string,
      green: string,
      title:string,
    }
  }
}
