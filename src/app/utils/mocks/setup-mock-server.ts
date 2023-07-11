import { jestMockHandlers } from 'mocks/handlers/controller.handler-map';
import { setupServer } from 'msw/node';


// This configures a request mocking server with the given request handlers.
export const jestMockServer = setupServer(...jestMockHandlers);
