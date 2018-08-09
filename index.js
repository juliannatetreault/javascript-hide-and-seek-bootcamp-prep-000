getFirstSelector(selector); {
  return document.querySelector(selector);
}

nestedTarget(); {
  return document.querySelector('#nested .target');
}

increaseRankBy(n); {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++);
  {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

deepestChild(); {
return document.querySelector('#grand-node div div div div');
}