try {
  var self = this;

  var timeoutFunction = function () {
    try{
      window.timeoutString="timeouted! " + ((_savedWindow === self) && (self === window) && (self === window.self));
      window.fs = require("fs");
    } catch (err) { 
      window.timeoutThrow = err;
    };
  }

  setTimeout(timeoutFunction, 0);
} catch (err) {
  window.timeoutInitThrow = err;
}
