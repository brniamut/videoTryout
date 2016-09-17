describe('video component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('video', function () {
      return {
        templateUrl: 'app/video.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<video></video>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
