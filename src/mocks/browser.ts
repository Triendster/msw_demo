import { backendMockHandlers } from 'mocks/handlers/controller.handler-map';
import { setupWorker } from 'msw';

export const worker = setupWorker(...backendMockHandlers);

