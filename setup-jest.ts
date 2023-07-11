import 'jest-preset-angular/setup-jest';
import 'cross-fetch/polyfill';

import { jestMockServer } from 'mocks/setup-mock-server';

// Establish API mocking before all tests.
beforeAll(() => jestMockServer.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => jestMockServer.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => jestMockServer.close());
