Router.configure({
  layoutTemplate: 'hello',
  notFoundTemplate: 'pageNotFound'
});

Router.map(function() {
  this.route('test');
});


