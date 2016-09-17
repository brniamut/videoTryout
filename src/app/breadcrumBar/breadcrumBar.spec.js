describe('breadcrumBar component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('breadcrumBar', function () {
      return {
        templateUrl: 'app/breadcrumBar.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<breadcrumBar></breadcrumBar>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
