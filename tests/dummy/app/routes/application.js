import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: "1", title: 'Buy milk', description: "Cause you can't got milk, if you aighn't got milk."},
      {id: "2", title: 'Buy cookies', description: "Can't have milk and cookies if you aingh't got cookies."},
      {id: "3", title: 'Wait till Christmas', description: "Cause once you got cookies and milk, Stanta will come and bring you presents."}
    ];
  }
});
