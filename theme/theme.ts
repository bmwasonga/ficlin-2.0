import { extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const theme = extendTheme({
  components: { Steps },
  Button: { baseStyle: { _focus: { boxShadow: 'none' } } }
});

export default theme;
