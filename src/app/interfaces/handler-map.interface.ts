import { MockContext } from 'enums';
import { AsyncResponseResolverReturnType, MockedResponse, RESTMethods, ResponseComposition, RestContext, RestRequest } from 'msw';

//Eine Map kann mehrere Controller enthalten (AccountController, Debitor, etc...)
export interface IHandlerMap {
    [controllerName: string]: IHandlerMapController;
}

//Enthält den Handler und beschreibt den Testfall durch die Definition des Handlers
export interface IHandlerMapController {
    [handlerName: string]: IHandler;
}

export interface IHandler {
    method: RESTMethods;
    url: string;
    handler: (req: RestRequest, res: ResponseComposition, ctx: RestContext) => AsyncResponseResolverReturnType<MockedResponse<any>>;
    context: MockContext;
}