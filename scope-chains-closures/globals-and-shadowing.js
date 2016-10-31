function foo() {
  var bar;
  quux = 'different from zip';

  function zip() {
    var quux = 'different from foo';
  }
}
