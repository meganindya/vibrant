import '@fontsource-variable/inter';

import '@/theme/font.css';
import '@/theme/colors.css';
import '@/theme/layout.css';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
