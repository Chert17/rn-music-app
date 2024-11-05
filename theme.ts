import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from './tailwind.config';

const fullConfig = resolveConfig(tailwindConfig) as any;

export const colors = fullConfig.theme.colors;
