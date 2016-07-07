import { Request } from './../http/Request';
import { Response } from './../http/Response';
import Log from './../lib/Log';

export default (log: Log) => {
	return (error: Error, request: Request, response: Response, next: Function) => {
		response.status(500);
		response.payload = {
			error: error.message
		};

		log.error(error.message);

		next();
	};
};