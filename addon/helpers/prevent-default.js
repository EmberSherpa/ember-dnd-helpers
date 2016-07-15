import Ember from 'ember';

export function preventDefault() {
  return function(event) {
    event.preventDefault();
    return event;
  };
}

export default Ember.Helper.helper(preventDefault);
