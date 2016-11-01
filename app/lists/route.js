import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      Ember.Object.create({
        title: 'Favorites',
        items: [
          { content: 'Mountains' },
          { content: 'Coffee' },
          { content: 'Live music' },
          { content: 'The spooky ghost emoji' },
        ],
      }),
      Ember.Object.create({
        title: 'Todos',
        items: [
          { content: 'Practice Ember' },
          { content: 'Move cross-country' },
          { content: 'Get oil change' },
          { content: 'Buy catnip' },
        ],
      }),
    ];
  },
});
