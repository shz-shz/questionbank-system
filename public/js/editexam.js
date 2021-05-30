var url = location.search.substr(1)
var id = url.split('=')[1]
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1/api/get-exam-by-Id?id=' + id);
xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
xhr.send(); //POST请求体
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
            var result = xhr.response[0]
            var id = document.getElementById('id')
            id.setAttribute('value', result.id)
            var creator_input = document.getElementById('creator')
            creator_input.setAttribute('value', result.creator)
            var topic_input = document.getElementById('topic')
            topic_input.setAttribute('value', result.topic)

            var starttime_year = result.starttime.split('T')[0].split('-')[0]
            var starttime_month = result.starttime.split('T')[0].split('-')[1]
            var starttime_date = result.starttime.split('T')[0].split('-')[2]

            var starttime_input = document.getElementById('starttime')

            starttime_input.children[0].setAttribute('value', starttime_year)
            starttime_input.children[1].setAttribute('value', starttime_month)
            starttime_input.children[2].setAttribute('value', starttime_date)

            var starttime_hour = result.starttime.split('T')[1].split(':')[0]
            var starttime_minute = result.starttime.split('T')[1].split(':')[1]
            var starttime_second = result.starttime.split('T')[1].split(':')[2]

            starttime_input.children[3].setAttribute('value', starttime_hour)
            starttime_input.children[4].setAttribute('value', starttime_minute)
            starttime_input.children[5].setAttribute('value', starttime_second)

            var duration = document.getElementById('duration')
            duration.children[0].setAttribute('value', parseInt(result.duration / 3600))
            duration.children[1].setAttribute('value', parseInt(result.duration % 3600 / 60))
            duration.children[2].setAttribute('value', parseInt(result.duration % 3600 % 60))

            var question_select = result.questions.split('??')
            var questions_list = document.getElementById('questions')
            for (var i = 0; i < question_select.length; i++) {
                for (var j = 0; j < questions_list.children.length; j += 2) {
                    if (question_select[i] == questions_list.children[j].getAttribute('value'))
                        questions_list.children[j].checked = true
                }
            }
        } else {

        }
    }
}
