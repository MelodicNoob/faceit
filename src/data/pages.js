import { colors } from './colors';

const { red, purple, orange, blue } = colors;

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
        id: 'd4',
        name: 'profile',
        icon: 'user',
        viewToggle: false,
        color: orange
    },
    {
        id: 'd3',
        name: 'tasks',
        icon: 'clock',
        viewToggle: false,
        color: blue
    }
];
