'use strict';
import * as _ from 'lodash';

export default class Config {
	private settings: any;
	constructor(settings: any) {
		if(!_.isObject(settings)) {
			throw new TypeError('Config settings need to be object type')
		}

		this.settings = settings;
	}

	get(key: string, defaultValue: any = null) {
		return _.get(this.settings, key, defaultValue);
	}

	set(key: string, value: any) {
		return _.set(this.settings, key, value);
	}

	has(key: string) {
		return _.has(this.settings, key);
	}
}