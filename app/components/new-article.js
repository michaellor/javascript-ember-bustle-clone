import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        story: this.get('story'),
        image: this.get('image'),
      };
      this.sendAction('save', params);
    }
  }
});
