import { Html, Head, Main, NextScript } from 'next/document'
import { darkTheme } from "../theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function Document() {
  return (
    <Html lang="en">
      <Head />      
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <body>
          <Main />
          <NextScript />
        </body>   
        </ThemeProvider>        
           
    </Html>
  )
}
