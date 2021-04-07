var answers = document.querySelector('.answers')
var url = location.search.substr(1);
originanswer = url.split('&')[2]
originanswer = originanswer.split('=')[1]
if (originanswer == 'A')
    answers.children[1].setAttribute('checked', 'checked')
else if (originanswer == 'B')
    answers.children[3].setAttribute('checked', 'checked')
else if (originanswer == 'C')
    answers.children[5].setAttribute('checked', 'checked')
else if (originanswer == 'D')
    answers.children[7].setAttribute('checked', 'checked')
var textarea = document.querySelector('textarea')
var analysisedit = url.split('&')[3]
analysisedit = analysisedit.split('=')[1]
textarea.innerHTML = decodeURI(analysisedit)

var select = document.querySelector('select')
var selected = url.split('&')[1]
selected = selected.split('=')[1]
if (selected == 0)
    select.children[0].setAttribute('selected', 'selected')
else if (selected == 1)
    select.children[1].setAttribute('selected', 'selected')
else if (selected == 2)
    select.children[2].setAttribute('selected', 'selected')
else if (selected == 3)
    select.children[3].setAttribute('selected', 'selected')