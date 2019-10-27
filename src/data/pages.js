import { colors } from './colors';

const { red, purple, blue, orange } = colors;

export const pages = [
  {
    id: 'd1',
    name: 'classes',
    icon: 'chalkboard-teacher',
    viewToggle: true,
    color: red
  },
  {
    id: 'd2',
    name: 'add',
    icon: 'plus',
    viewToggle: false,
    color: purple
  },
  {
    id: 'd3',
    name: 'schedule',
    icon: 'clock',
    viewToggle: false,
    color: blue
  },
  {
    id: 'd4',
    name: 'profile',
    icon: 'user',
    viewToggle: false,
    color: orange
  }
];
