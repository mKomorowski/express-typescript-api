import * as _ from 'lodash';
import { Request } from './../http/Request';
import { Response } from './../http/Response';
import Log from './../lib/Log';

export default (log: Log) => {
  return (request: Request, response: Response, next: Function) => {

    if(_.isObject(response.payload)) {
      response.json(response.payload);
    }

    response.status(404).send();
  };
};