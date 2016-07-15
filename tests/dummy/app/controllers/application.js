import Ember from 'ember';

const {
  A
} = Ember;

export default Ember.Controller.extend({
  backlog: [],
  pending: [],
  complete: [],
  actions: {
    add(to, {from, id}) {
      let destination = new A(this.get(to));
      let source = new A(this.get(from));

      let card = source.findBy('id', id);
      source.removeObject(card);

      destination.pushObject(card);
    }
  }
});
