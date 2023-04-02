import { module, test } from 'qunit';
import { setupTest } from 'foodie/tests/helpers';

module('Unit | Route | unauthorized', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:unauthorized');
    assert.ok(route);
  });
});
