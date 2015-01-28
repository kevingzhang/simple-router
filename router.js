
Router.configure({
  notFoundTemplate: 'notFound'
});//And please remeber to add a template called notFound 


Router.route('/', 'hello');
Router.route('test');
