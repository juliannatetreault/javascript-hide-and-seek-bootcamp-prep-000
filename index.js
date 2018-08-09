function getFirstSelector(selector) {
  document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++);
  {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  document.querySelector('#grand-node div div div div');
}