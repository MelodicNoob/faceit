import React from 'react';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const links = [
    { id: 1, name: 'classes', linkColor: 'red' },
    { id: 2, name: 'schedule', linkColor: '#453192' },
    { id: 3, name: 'profile', linkColor: '#fbb03b' },
    { id: 4, name: 'settings', linkColor: '#29abe2' }
  ];
  return (
    <nav>
      <ul>
        {links.map(link => {
          return <NavigationLink link={link} />;
        })}
      </ul>
    </nav>
  );
}
