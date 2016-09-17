function Player($http) {
  var self = this;

  // Private functions
  function createRequestData(id) {
    return {
      cache: true,
      method: 'GET',
      url: 'http://api2.video.beeldengeluid.nl/api/2.0/players/' + id
    }
  }

  // Public functions
  self.getData = getData;
  function getData(id) {
    return $http(createRequestData(id));
  }
}

angular
  .module('app')
  .service('Player', Player);

