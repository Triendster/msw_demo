import { MockContext } from 'enums';
import { IHandlerMap } from 'interfaces';
import { HelperService } from 'services';
import { EXAMPLE_CONTROLLER_HANDLER_MAP } from './example-controller.handler-map';

const CONTROLLER_HANDLER_MAP: IHandlerMap = {
    ['ExampleController']: EXAMPLE_CONTROLLER_HANDLER_MAP,
};

export const jestMockHandlers = HelperService.createHandlersFromHandlerMap(CONTROLLER_HANDLER_MAP, MockContext.UNIT_TEST);
export const backendMockHandlers = HelperService.createHandlersFromHandlerMap(CONTROLLER_HANDLER_MAP, MockContext.BACKEND);