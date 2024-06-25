import "styled-components";
interface Theme {
  colors: {
    white: string;
    primary: string;
    primaryDark: string;
    secondary: string;
  };
  font: {
    text: string;
    errorMessage: string;
    subtitle: string;
    subtitleG: string;
    title: string;
    titleG: string;
  };
  border: {
    button: string;
    images: string;
    wrappers: string;
  };
  paddings: {
    medium: string;
    large: string;
  };
}
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
