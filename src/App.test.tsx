import { describe, expect, test } from 'vitest';
import {  render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('rendu de la page de connexion', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to the Cryptsend administration interface.')).toBeInTheDocument();
  });

  // test('navigation vers le tableau de bord', async () => {
  //   const { getByText, getByPlaceholderText } = render(<App />);
  //   const loginButton = getByText('Sign in to Admin Panel');
  //   fireEvent.click(loginButton);
  //   await waitFor(() => {
  //     expect(
  //       getByPlaceholderText('Bienvenue sur la Dashboard')
  //     ).toBeInTheDocument();
  //   });
  // });
});