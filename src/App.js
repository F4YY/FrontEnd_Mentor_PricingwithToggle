import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { switchTheme } from './components/Switchtoggle';
import { PricingwithToggle } from "./components/PricingwithToggle";

export const theme = extendTheme({
  components: { Switch: switchTheme },
})
function App() {
  return (
    <ChakraProvider theme={theme}>
      <PricingwithToggle/>
    </ChakraProvider>
  );
}

export default App;
