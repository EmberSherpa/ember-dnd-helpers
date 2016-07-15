import Ember from 'ember';

export function dragGet([type]) {
  return function(event) {
      let value = event.dataTransfer.getData(type);
      if (type === 'application/json') {
        return JSON.parse(value);
      }
    return value;
  };
}

export default Ember.Helper.helper(dragGet);
