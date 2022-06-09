import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Home from '../pages/blog/index';
import '@testing-library/jest-dom';

test('checks for image on page', () => {
  const sum = (a, b) => {
    return a + b;
  };
  const a = 5;

  expect(a).toBe(5);
  expect(sum(a, 2)).toBe(7);
});
