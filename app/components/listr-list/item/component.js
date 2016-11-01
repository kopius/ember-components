import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['strikethrough'],
  strikethrough: false,
  actions: {
    toggleStrikethrough(){
      return this.toggleProperty('strikethrough');
    },
  }
});
