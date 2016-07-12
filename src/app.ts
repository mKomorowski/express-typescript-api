'use strict';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import Config from './lib/Config';
import * as compression from 'compression';
import * as jwt from 'jsonwebtoken';
import * as express from 'express';
import expressValidator = require('express-validator');
import Log from './lib/Log';
import { Logger, transports } from 'winston';

// Middleware
import requestHandler from './middleware/requestHandler';
import errorHandler from './middleware/errorHandler';
import responseHandler from './middleware/responseHandler';

// App
import settings from './settings';

const config = new Config(settings);
const log = new Logger({
	transports: [
		new transports.Console({
			level: config.get('log.level'),
			handleExceptions: true,
			json: false,
			colorize: true
		})
	]
});

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

// Routes registration
app.use('/', require('./routes/main'));

app.use(requestHandler.call(null, config, log));
app.use(errorHandler.call(null, log));
app.use(responseHandler.call(null, log));

app.set('port', config.get('port'));

export default app;
