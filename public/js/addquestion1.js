var type = document.querySelector('.types')
var options = document.querySelector('#options')
var answers = document.querySelector('.answers')
var answer_text = document.querySelector('#answer_text')
answer_text.style.display = 'none'
type.children[1].addEventListener('click', function () {
	//选择单选按钮
	answers.style.display = 'block' //显示单选题答案输入
	answer_text.style.display = 'none' //隐藏简答题答案输入
	options.style.display = 'block' //显示单选题选项信息输入
	options.children[2].removeAttribute('value') //去除掉单选题选项信息默认提交的value值
	options.children[4].removeAttribute('value')
	options.children[6].removeAttribute('value')
	options.children[8].removeAttribute('value')
	answers.children[1].setAttribute('name', 'answer') //将单选题的单选按钮加上name属性来进行表单提交
	answers.children[3].setAttribute('name', 'answer')
	answers.children[5].setAttribute('name', 'answer')
	answers.children[7].setAttribute('name', 'answer')
	answer_text.removeAttribute('name') //去除简答题的表单中的name属性阻止提交
})
type.children[3].addEventListener('click', function () {
	//选择简答按钮
	answers.style.display = 'none' //隐藏单选题答案输入
	answer_text.style.display = 'block' //显示简答题答案输入
	options.style.display = 'none' //隐藏单选题选项信息输入
	options.children[2].setAttribute('value', 'null') //将单选题选项信息默认提交值变为null(最好提交一个值因为数据库格式需要)
	options.children[4].setAttribute('value', 'null')
	options.children[6].setAttribute('value', 'null')
	options.children[8].setAttribute('value', 'null')
	answers.children[1].removeAttribute('name') //将单选题的答案提交表单中的name属性去除阻止提交
	answers.children[3].removeAttribute('name')
	answers.children[5].removeAttribute('name')
	answers.children[7].removeAttribute('name')
	answer_text.setAttribute('name', 'answer') //将简答题的答案提交表单加上属性name来提交答案
})
