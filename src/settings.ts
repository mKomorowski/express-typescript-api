import * as path from 'path';

const default_environment = 'development';
const appEnvironments = [
	'development',
	'production'
];

const environment = (process.env.NODE_ENV) ? process.env.NODE_ENV.toLowerCase() : undefined;
let settings = (appEnvironments.indexOf(environment) >= 0) ? require(path.join('./../config', environment)) :
																														 require(path.join('./../config', default_environment));


export default settings;
