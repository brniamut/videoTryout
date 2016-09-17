describe('Player service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Player) {
    expect(Player.getData()).toEqual(3);
  }));
});
