import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import Login from './Login';

describe('Login', () => {
  test('rendu du formulaire de connexion', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(getByPlaceholderText('Enter your Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your Password')).toBeInTheDocument();
  });

});
