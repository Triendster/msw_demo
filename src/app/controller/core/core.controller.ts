import { Injectable } from '@angular/core';
import { HttpStatusCode } from 'enums';
import { GlobalSettings } from 'mocks/global-settings';
import { BadRequest, Conflict, InternalServerError, NotFound, RequestTimeout, Unauthorized } from '@curveball/http-errors';

@Injectable({
    providedIn: 'root',
})
export abstract class CoreController {

    public constructor() { }

    protected async fetch<T extends unknown>(action: string, method: string): Promise<T> {
        const url = `${GlobalSettings.apiUrl}/${action}`;

        const requestOptions: RequestInit = {
            method: method,
            headers: {
                'content-type': 'application/json',
            },
        }
        try {
            const response = await this._fetchWithTimeout(url, requestOptions);
            return this._handleResponse(response);
        }

        catch (error) {
            return this._handleRequestError(error);
        }
    }

    private _handleResponse<T extends unknown | null>(response: Response): Promise<T> {
        if (response.status === HttpStatusCode.OK) {
            return Promise.resolve(response.json() as T);
        }
        else if (response.status === HttpStatusCode.NO_CONTENT) {
            return Promise.resolve(null as T);
        }

        else if (response.status === HttpStatusCode.BAD_REQUEST) {
            return Promise.reject(new BadRequest(`Stupid fool with status code: ${response.status}`));
        }
        else if (response.status === HttpStatusCode.UNAUTHORIZED) {
            return Promise.reject(new Unauthorized(`Stupid fool with status code: ${response.status}`));
        }
        else if (response.status === HttpStatusCode.NOT_FOUND) {
            return Promise.reject(new NotFound(`Stupid fool with status code: ${response.status}`));
        }
        else if (response.status === HttpStatusCode.CONFLICT) {
            return Promise.reject(new Conflict(`Stupid fool with status code: ${response.status}`));
        }
        else if (response.status === HttpStatusCode.INTERNAL_SERVER_ERROR) {
            return Promise.reject(new InternalServerError(`Stupid fool with status code: ${response.status}`));
        }
        else {
            // eslint-disable-next-line no-console
            console.error(response);
            return Promise.reject(new BadRequest(response.status.toString()));
        }
    }

    private _handleRequestError(error: unknown) {
        return Promise.reject(error);
    }

    private _fetchWithTimeout(url: RequestInfo, options?: RequestInit, timeout = 120000): Promise<Response> {
        return Promise.race([
            fetch(url, options),
            new Promise<Response>((_, reject) => setTimeout(() => reject(Response), timeout)),
        ]);
    }
}