// tagcloud plugin for reveal.js
// Forked originally from:
// source: https://github.com/sebhildebrandt/reveal.js-tagcloud-plugin
// license: MIT
//
(function(){
[].forEach.call( document.querySelectorAll('[data-tagcloud]'), function(cloud) {
  var dataLoc = cloud.getAttribute('data-tagcloud');
  var data = window[dataLoc];
  var tags = data.tags;
  var size = data.size;
  var fontSizes = {};

  function jitter(range) {
    return Math.floor(Math.random() * (range - -range + 1)) + -range;
  }

  Object.keys(tags).forEach(function(tag, i) {
    var order = tags[tag];
    var baseSize = 5 * (2*(3-order)) + 100;
    fontSizes[tag] = baseSize + jitter(8);
  });

  var elements = []

  Object.keys(tags).forEach(function(tag, i) {
    var elem = document.createElement('span');
    elem.appendChild(document.createTextNode(tag));

    var fontSize = fontSizes[tag];
    if (size == "large") {
        fontSize = fontSize * 2.5;
    }
    elem.style.fontSize = fontSize + '%';
    if (cloud.hasAttribute('bw')) {
      var col = Math.round(Math.random() * 155 + 100);
      elem.style.color = 'rgb('+ col  +',' + col + ',' + col + ')'
    } else {
      elem.style.color = 'hsl('+ Math.random()*360 +', 40%, 50%)'
    }

    elem.classList.add('clouditem')

    elements.push(elem);
  });

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }

  elements = shuffle(elements);
  [].forEach.call(elements, function(elem) {
    cloud.appendChild(elem);
    cloud.appendChild(document.createTextNode(' '));
  });

});
}
)();
