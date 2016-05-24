describe('Login', function() {
  it('show be imput of form has 2 inputs and 1 button', function() {
    browser.get('http://localhost:8000/');
    expect(by.model('vm.mail')).toBeDefined();
    expect(by.model('vm.password')).toBeDefined();
    expect(by.css('.md-button')).toBeDefined();
  });

  it('should be a password is required', function() {
    browser.get('http://localhost:8000/');
    element(by.model('vm.email')).sendKeys('itacir@hotmail.com');
    element(by.model('vm.password')).sendKeys();
    element(by.css('.md-button')).click();
    expect(element(by.css('.invalid-pass')).getText())
      .toEqual('password requerido');
  });

  it('should be a require valid email', function() {
    browser.get('http://localhost:8000/');
    element(by.model('vm.email')).sendKeys('itacir.com');
    element(by.model('vm.password')).sendKeys(12345678);
    element(by.css('.md-button')).click();
    expect(element(by.css('.invalid-email')).getText())
      .toEqual('email requerido');
  });

  it('should be a require valid email', function() {
    browser.get('http://localhost:8000/');
    element(by.model('vm.email')).sendKeys('itacir@hotmail.com');
    element(by.model('vm.password')).sendKeys(12345678);
    element(by.css('.md-button')).click();
    var saveAlert = element(by.css('md-toast'));
    browser.wait(function(){
      return browser.isElementPresent(saveAlert);
    });
    expect(saveAlert.getText()).toEqual('logado com sucesso');

  });

});
