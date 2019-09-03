// NB. We have used the module pattern to wrap our assert method

(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("Assertion passed: " + assertionToCheck)
      }
    }
  };
  exports.assert = assert;
})(this);
