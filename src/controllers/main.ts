'use strict';
import { Request } from './../http/Request';
import { Response } from './../http/Response';
import * as exampleModel from './../models/example';

export function index (request: Request, response: Response, next: Function) {
	exampleModel.get((error, results: any) => {
		if(error) {
				return next(error);
		}

		if(results) {
				response.payload = results;
		}

		next();
	});
}