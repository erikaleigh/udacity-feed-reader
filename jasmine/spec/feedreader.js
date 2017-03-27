/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('URL is defined, is not empty', function() {
           for (i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
           }
         });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is defined, is not empty', function() {
           for (i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
           }
         });

    });

    /* New test suite named "The menu" */
    describe('the menu', function() {

        /* TODO: Test that ensures the menu element is
         * hidden by default.
         */

        it('is hidden by default', function() {
          expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

         /* Test that ensures the menu toggles
          * visibility when the menu icon is clicked.
          */

        it('toggles visibility when hamburger clicked', function() {
          $('a.menu-icon-link').click();
          expect($(document.body).hasClass('menu-hidden')).toBe(false);

          $('a.menu-icon-link').click();
          expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

      });

    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function() {

    /* Be sure tests run after loadFeed is completed */
      beforeEach(function(done) {
        loadFeed(0, done);
      });

    /* There is at least one single .entry element within the .feed container */
      it('contains at least a single entry in feed container', function() {
        expect($('.feed .entry').length).not.toBe(0);
      });

});
    /* New test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      var feed;
      var newFeed;

      /* Be sure tests run after loadFeed is completed */
        beforeEach(function(done) {
          loadFeed(0, done);
          feed = $('.feed').html();

          loadFeed(1, function() {
            newFeed = $('.feed').html();
            done();
          });
        });

      /* Check to make sure feed updates with "newFeed" content */
        it('content updates', function() {
          expect(feed).not.toBe(newFeed);
        });

    });
}());
