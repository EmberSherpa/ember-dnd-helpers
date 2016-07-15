import Ember from 'ember';

export function stopPropagation() {
  return function(event) {
    event.stopPropagation();
    return event;
  };
}

export default Ember.Helper.helper(stopPropagation);
