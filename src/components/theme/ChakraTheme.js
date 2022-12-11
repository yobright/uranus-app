import { extendTheme } from "@chakra-ui/react";
import styles from './styles'

const theme = extendTheme({
  fonts: {
    body: `'Work Sans', sans-serif`,
  },
  colors: {
    mainblue: {
      100: '#034C95'
    }
  }
});

export default theme;
