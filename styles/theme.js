import { createTheme } from '@mui/material/styles';

import shape from './shape';
import typography from './typography';
import componentsOverride from './overrides';

const theme = createTheme({ 
	palette: {
		mode: 'dark'
	},
	shape,
	typography,
});

theme.components = componentsOverride(theme);

export default theme;