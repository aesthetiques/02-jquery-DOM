'use strict';

var articles = [];

function Article (articleObject) {
  // TODO: Use the JS object passed in to complete this constructor function:
  // Save ALL the properties of `opts` into `this`
  this.title = articleObject.title;
  this.category = articleObject.category;
  this.author = articleObject.author;
  this.authorUrl = articleObject.authorUrl;
  this.publishedOn = articleObject.publishedOn;
  this.body = articleObject.body;
};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  /* TODO: This cloned article is no longer a template,
  as it now has real data attached to it! We need to account
  for that before this current article gets rendered to our
  DOM. */
  $newArticle.removeClass('template');

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.data('category', this.category);
  console.log(this.title);

  $newArticle.find('h1').text(this.title);
  $newArticle.find('Author Name').text(this.author);
  $newArticle.find('address>a').html('href', this.authorUrl);
  $newArticle.find('date').html('date-time', this.publishedOn);
  $newArticle.find('.article-body').html(this.body);

  /* TODO: Now use jQuery to fill in the rest of the current
  template clone with properties from this particular Article instance.
  We need to fill in:
    1. author name,
    2. author url,
    3. article title,
    4. article body, and
    5. publication date. */

  // Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  articles.push(new Article(articleObject));
  console.log(articleObject);
});

articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
  console.log(a);
});
