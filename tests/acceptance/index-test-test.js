import { test } from 'qunit';
import moduleForAcceptance from 'ember-network-test/tests/helpers/module-for-acceptance';
import fetchMock from 'npm:fetch-mock';

moduleForAcceptance('Acceptance | index test');

test('visiting /', function(assert) {
  fetchMock.get('/abc', {
    'data': {
      'something': '123'
    }
  });

  visit('/');

  andThen(function() {
    assert.equal(find('.fetch-response').text().trim(), 'works', 'It has mocked response text');
  });
});
