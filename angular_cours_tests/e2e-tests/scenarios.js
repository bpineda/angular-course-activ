'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /users when location hash/fragment is empty', function() {
    browser.get('crud.html');
    expect(browser.getLocationAbsUrl()).toMatch("/users");
  });

  describe('users', 
    function()
    {
        beforeEach( function()
                    {
                        browser.get('crud.html#/users');
                    }
        );

        it( 'should render Reload button',
            function()
            {
              expect(
                    element.all(by.css('[ng-view] button')).first().getText()
                ).toBe('Reload');
            }

          );

        it( 'should render Reload button',
            function()
            {
              expect(
                    element.all(by.css('[ng-view] a')).last().getText()
                ).toBe('Create new');
            }

          );

        it( 'should not have users',
            function()
            {
                expect( element.all(by.repeater('user in users')).count() ).toEqual(0);
            }

          );

        it( 'should create a user',
            function()
            {

                browser.get('crud.html#/users/new');
                element(by.model('user.name')).sendKeys('bernardo');
                element(by.model('user.email')).sendKeys('bernardopineda@activ.com.mx');
                element(by.css('.success')).click();
                expect( element.all(by.repeater('user in users')).count() ).toEqual(1);
            }

          );


    }
    );

  describe(
      'users new',
      function()
      {
          beforeEach(
              function()
              {
                  browser.get('crud.html#/users/new');
                  element(by.model('user.name')).sendKeys('bernardo');
                  element(by.model('user.email')).sendKeys('bernardopineda@activ.com.mx');
                  element(by.css('.success')).click();

                  /*element(by.model('user.name')).sendKeys('bernardo');
                  element(by.model('user.email')).sendKeys('bernardopineda@activ.com.mx');
                  element(by.css('.success')).click();*/
              }
            );

          it(
              'should have 2 users',
              function()
              {
                  browser.get('crud.html#/users');
                  expect( element.all(by.repeater('user in users')).count() ).toEqual(2);
              }
            );

      }
    );

  /*describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });*/
});