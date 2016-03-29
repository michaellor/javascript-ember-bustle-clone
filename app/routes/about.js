import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },

  actions: {
    save(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('about');
    },

    delete(article) {
      if(confirm("Are you sure?")) {
        article.destroyRecord();
      }
    }
  }
});
