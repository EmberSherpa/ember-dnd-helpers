import Ember from 'ember';

export function dropEffect(effect) {
  return function(event) {
    event.dataTransfer.dropEffect = effect;
    return event;
  };
}

export default Ember.Helper.helper(dropEffect);
