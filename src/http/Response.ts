'use strict';
import { Response as ExpressResponse } from 'express';

export interface Response extends ExpressResponse {
	payload: any
}