import Ember from 'ember';

const {
  A
} = Ember;

export default Ember.Controller.extend({
  backlog: [],
  pending: [],
  complete: [],
  actions: {
    add(card, from, to) {
      to = new A(to);
      from = new A(from);

      from.removeObject(card);

      to.pushObject(card);
    },
    after(card, from, to, hovered ) {
      to = new A(to);
      from = new A(from);

      from.removeObject(card);        

      let index = to.indexOf(hovered);
      to.insertAt(index+1, card);
    }
  }
});
