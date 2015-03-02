PlumpBustle.Router.map(function() {
  this.resource('articles', {path: '/'});
  this.resource('goat-article');
  this.resource('hedgehog-article');
  this.resource('monkey-article');
  this.resource('pug-article');
});
