if (null == window.originalCreateElement) {
    window.originalCreateElement = document.createElement;
  }
  document.createElement = function(originalFunction) {
    return function(elementType) {
      let element = window.originalCreateElement.apply(this, arguments);
      
      if (elementType === "video" || elementType === "audio") {
        if (window.mediaArray === undefined) {
          window.mediaArray = [];
        }
        
        if (window.mediaArray.length < 25) {
          window.mediaArray.push(element);
        }
      }
      
      return element;
    };
  }(document.createElement);