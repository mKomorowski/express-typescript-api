var expect = require('chai').expect;
var Config = require('./../../app/lib/Config').default;

describe('Config', function () {
	var config;
	var settings = {
		name: 'test',
		database: {
			name: 'testDb'
		}
	};

	context('constructor', function () {
		it('should not throw an error with object parameter', function () {
			expect(function () {
				var config = new Config(settings);
			}).not.to.throw(TypeError);
		});

		it('should throw TypeError with non-object parameter', function () {
			expect(function () {
				var config = new Config('settings');
			}).to.throw(TypeError);
		})
	});

	context('get method', function () {
		before(function () {
			config = new Config(settings);
		});

		it('should retrieve existing value', function () {
			expect(config.get('database.name')).to.equal('testDb');
		});

		it('should return null when value do not exists', function () {
			expect(config.get('example')).to.equal(null);
		});

		it('should return default when value do not exists', function () {
			expect(config.get('example', 'default')).to.equal('default');
		});
	});

	context('has method', function () {
		before(function () {
			config = new Config(settings);
		});

		it('should return true for existing value', function () {
			expect(config.has('database.name')).to.be.true;
		});

		it('should return false for not existing value', function () {
			expect(config.has('example')).to.be.false;
		});
	});

	context('set method', function () {
		before(function () {
			config = new Config({});
		});

		it('should set and retrieve new value', function () {
			config.set('database.host', 'localhost');

			expect(config.get('database.host')).to.equal('localhost');
		});
	});
});