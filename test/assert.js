// NB. We have used the module pattern to wrap our assert method
var counter = 1;

(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Test failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log(counter + " Test passed: " + assertionToCheck)
      }
    }
  };
  exports.assert = assert;
})(this);
