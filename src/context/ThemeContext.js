import React from 'react';

export const colors = {
  red: '#FF0000',
  purple: '#453192',
  orange: '#fbb03b',
  blue: '#29abe2'
};

export const ThemeContext = React.createContext({
  color: colors.red,
  setColor: () => {}
});
