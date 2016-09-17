describe('gridItem component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('gridItem', function () {
      return {
        templateUrl: 'app/gridItem.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<gridItem></gridItem>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
