import 'styled-components/native';

import theme from '../theme';

declare module 'styled-components/native' {
  // CRIAR UMA TIPAGEM BASEADA NO CONTEÚDO DO MEU TEMA
  type ThemeType = typeof theme;

  /**
   * EXTENDER DO TEMA PADRÃO DO STYLED COMPONENT
   * DIZENDO QUAL É O TIPO DO TEMA QUE ESTOU UTILIZANDO
   * QUAL O CONTEÚDO DO TEMA
   */
  export interface DefaultTheme extends ThemeType {}
}
