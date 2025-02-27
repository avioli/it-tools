import { LetterCaseToggle } from '@vicons/tabler';
import type { ITool } from './../Tool';

export const tool: ITool = {
  name: 'Case converter',
  path: '/case-converter',
  description: 'Change the case of a string and chose between different formats',
  keywords: [
    'case',
    'converter',
    'camelCase',
    'capitalCase',
    'constantCase',
    'dotCase',
    'headerCase',
    'noCase',
    'paramCase',
    'pascalCase',
    'pathCase',
    'sentenceCase',
    'snakeCase',
  ],
  component: () => import('./case-converter.vue'),
  icon: LetterCaseToggle,
};
