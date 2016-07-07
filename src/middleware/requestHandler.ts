import Config from './../lib/Config';
import { Request } from './../http/Request';
import { Response } from './../http/Response';
import Log from './../lib/Log';

export default (config: Config, log: Log) => {
	const mergeValidationErrors = (errors) => {
			return errors.map(error => error.msg).join(', ');
	};

	return (request: Request, response: Response, next: Function) => {
		request.checkQuery('api_key', 'Invalid or missing api_key parameter').notEmpty();

		const validatorErrors = request.validationErrors();

		if(validatorErrors) {
			const validationError = new Error(mergeValidationErrors.call(null, validatorErrors));

			next(validationError);
		}

		next();
	};
};