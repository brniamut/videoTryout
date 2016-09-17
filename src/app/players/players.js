function Players($http) {
  var self = this;

  // Private variables
  var parameters = {
    limit: 25,
    page: 0,
    'query[name]': 'Polygoon%',
    sort: 'name,ASC',
    status: 'ready'
  };

  var requestData = {
    cache: true,
    method: 'GET',
    url: 'http://api2.video.beeldengeluid.nl/api/2.0/players',
    params: parameters
  };

  // Public functions
  self.getData = getData;

  // Implementations
  function getData() {
    return $http(requestData);
  }
}

angular
  .module('app')
  .service('Players', Players);