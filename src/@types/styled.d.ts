/* eslint-disable @typescript-eslint/no-empty-interface */
/* Arquivo de definição de tipos */

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
