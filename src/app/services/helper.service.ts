import { RestHandler, MockedRequest, DefaultBodyType, RESTMethods, rest } from "msw";
import { MockContext } from "../enums/mock-context.enum";
import { IHandlerMap, IHandler } from "../interfaces/handler-map.interface";

export class HelperService {

  private constructor() { }

  public static hasFlag<T>(flag: T, value?: T): boolean {
    if (value === undefined || value === null) {
      return false;
    }
    else {
      return ((value as unknown as number) & (flag as unknown as number)) !== 0;
    }
  }

  public static createHandlersFromHandlerMap(handlerMap: IHandlerMap, context: MockContext): RestHandler<MockedRequest<DefaultBodyType>>[] {
    const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [];
    for (const controllerName in handlerMap) {
      if (controllerName in handlerMap) {
        for (const handlerName in handlerMap[controllerName]) {
          if (handlerName in handlerMap[controllerName]) {
            const handler: IHandler = handlerMap[controllerName][handlerName];
            if (HelperService.hasFlag(handler.context, context)) {
              if (handler.method === RESTMethods.GET) {
                handlers.push(rest.get(handler.url, handler.handler));
              }
              else if (handler.method === RESTMethods.POST) {
                handlers.push(rest.post(handler.url, handler.handler));
              }
              else if (handler.method === RESTMethods.PUT) {
                handlers.push(rest.put(handler.url, handler.handler));
              }
              else if (handler.method === RESTMethods.DELETE) {
                handlers.push(rest.delete(handler.url, handler.handler));
              }
              else {
                continue;
              }
            }
          }
        }
      }
    }
    return handlers;
  }
}
