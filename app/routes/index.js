import Ember from 'ember';
const { Promise } = Ember.RSVP;

export default Ember.Route.extend({
  model() {
    return new Promise((resolve, reject) => {
      let fetchSuccess = (responseFetch) => {
        console.log('fetchResponse', responseFetch.statusText);
        if (responseFetch.statusText === "OK") {
          resolve({it: 'works'});
        } else {
          resolve([]);
        }
      };
      let fetchError = () => {
        reject();
      };
      fetch('/abc').then(fetchSuccess, fetchError);
    });
  }
});
