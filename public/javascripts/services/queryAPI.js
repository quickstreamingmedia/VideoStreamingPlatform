app.factory('streamFactory', ['$http', '$q', function($http, $q) {
	var urlBase = '/streams'
	var dataFactory = {};

	dataFactory.getStreams = function () {
		var defer = $q.defer();

		$http.get(urlBase)
		.success(function (data) {
			defer.resolve(data);
		})
		.error(function (err) {
			defer.reject(err);
		});

		return defer.promise;
	};

	dataFactory.getStream = function (id){
		var defer = $q.defer();

		$http.get(urlBase + '/' + id)
		.success(function (data) {
			defer.resolve(data);
		})
		.error(function (err) {
			defer.reject(err);
		});

		return defer.promise;
	};

	dataFactory.searchStreams = function (query){
		var defer = $q.defer();
		$http.get(urlBase + '/search/' + query)
		.success(function (data) {
			defer.resolve(data);
		})
		.error(function (err) {
			defer.reject(err);
		});

		return defer.promise;
	};

	dataFactory.getCategory = function (cat) {
		var defer = $q.defer();
		$http.get(urlBase + '/category/' + cat)
		.success(function (data) {
			defer.resolve(data);
		})
		.error(function (err) {
			defer.reject(err);
		});
		return defer.promise;
	};

	dataFactory.insertStream = function (obj) {
		var defer = $q.defer();
		$http.post(urlBase, obj)
		.success(function (data) {
			defer.resolve(data);
		})
		.error(function (err) {
			defer.reject(err);
		});
		return defer.promise;
	};

	return dataFactory;
}]);
