import { render, screen } from '@testing-library/react';

import React from 'react';
import App from '../App';

xdescribe('<LandingPage />', () => {
  test('render App component', () => {
    render(<App />);
    // screen.getByRole('');
  })
});