import { IHandlerMapController } from "interfaces";
import { RESTMethods } from "msw";
import { GlobalSettings } from "..";
import { MockContext } from "enums";
import { ModelGenerator } from "generators";

export const EXAMPLE_CONTROLLER_HANDLER_MAP: IHandlerMapController = {
    ['users']: {
        method: RESTMethods.GET,
        url: `${GlobalSettings.apiUrl}/users`,
        handler: async (_, res, ctx) => {
            const responseData = ModelGenerator.generateUsers(123);

            return res(
                ctx.status(200),
                ctx.json(responseData),
            );
        },
        context: MockContext.BACKEND,
    },
    ['posts']: {
        method: RESTMethods.GET,
        url: `${GlobalSettings.apiUrl}/posts`,
        handler: async (_, res, ctx) => {
            const responseData = ModelGenerator.generatePosts(123, 100);

            return res(
                ctx.status(200),
                ctx.json(responseData),
            );
        },
        context: MockContext.BACKEND,
    },
    ['albums']: {
        method: RESTMethods.GET,
        url: `${GlobalSettings.apiUrl}/albums`,
        handler: async (_, res, ctx) => {
            const responseData = ModelGenerator.generateAlbums(123, 100);

            return res(
                ctx.status(200),
                ctx.json(responseData),
            );
        },
        context: MockContext.BACKEND,
    },
    ['photos']: {
        method: RESTMethods.GET,
        url: `${GlobalSettings.apiUrl}/photos`,
        handler: async (_, res, ctx) => {
            const responseData = ModelGenerator.generatePhotos(123, 5000);

            return res(
                ctx.status(200),
                ctx.json(responseData),
            );
        },
        context: MockContext.BACKEND,
    },
    ['todos']: {
        method: RESTMethods.GET,
        url: `${GlobalSettings.apiUrl}/todos`,
        handler: async (_, res, ctx) => {
            const responseData = ModelGenerator.generateTodos(123, 200);

            return res(
                ctx.status(200),
                ctx.json(responseData),
            );
        },
        context: MockContext.BACKEND,
    },
    ['comments']: {
        method: RESTMethods.GET,
        url: `${GlobalSettings.apiUrl}/comments`,
        handler: async (_, res, ctx) => {
            const responseData = ModelGenerator.generateComments(123, 500);

            return res(
                ctx.status(200),
                ctx.json(responseData),
            );
        },
        context: MockContext.BACKEND,
    }
}