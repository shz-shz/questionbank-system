define({ "api": [
  {
    "type": "Get",
    "url": "/api/get-10-random-questions",
    "title": "get10RandomQuestions",
    "group": "Questions",
    "name": "get10RandomQuestions",
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"id\":1,\n  \"uploader\":\"shzshz\",\n  \"type\":\"单选\",\n  \"question\":\"下列哪个样式定义后,内联(非块状)元素可以定义宽度和高度\",\n  \"tag\":2,\n  \"optionA\":\"display:inline\",\n  \"optionB\":\"display:none\",\n  \"optionC\":\"display:block\",\n  \"optionD\":\"display:inherit\",\n  \"answer\":\"C\",\n  \"analysis\":\"内联元素加上display：block;后被块级化。块级元素一般是其他元素的容器，可容纳内联元素和其他块状元素，块状元素排斥其他元素与其位于同一行，宽度(width)高度(height)起作用。因此，可以定义其宽度和高度。\"\n}...",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/API/API.js",
    "groupTitle": "Questions"
  },
  {
    "type": "Get",
    "url": "/api/get-10-random-single-choice-questions",
    "title": "get10RandomSingleChoiceQuestions",
    "group": "Questions",
    "name": "get10RandomSingleChoiceQuestions",
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{ \n  \"id\":39,\n  \"uploader\":\"???\",\n  \"type\":\"单选\",\n  \"question\":\"<img>标记符中连接图片位置的参数是\",\n  \"tag\":1,\n  \"optionA\":\"href\",\n  \"optionB\":\"src\",\n  \"optionC\":\"type\",\n  \"optionD\":\"align\",\n  \"answer\":\"B\",\n  \"analysis\":\"无\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/API/API.js",
    "groupTitle": "Questions"
  },
  {
    "type": "Get",
    "url": "/api/get-5-random-fill-blank-questions",
    "title": "get5RandomFillBlankQuestions",
    "group": "Questions",
    "name": "get5RandomFillBlankQuestions",
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{ \n  \"id\":114,\n  \"uploader\":\"shzshz\",\n  \"type\":\"填空\",\n  \"question\":\"8789___122___4165365\",\n  \"tag\":3,\n  \"optionA\":\"null\",\n  \"optionB\":\"null\",\n  \"optionC\":\"null\",\n  \"optionD\":\"null\",\n  \"answer\":[['111','222'],['333']],\n  \"analysis\":\"753753\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/API/API.js",
    "groupTitle": "Questions"
  },
  {
    "type": "Get",
    "url": "/api/get-5-random-short-answer-questions",
    "title": "get5RandomShortAnswerQuestions",
    "group": "Questions",
    "name": "get5RandomShortAnswerQuestions",
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{ \n  \"id\":96,\n  \"uploader\":\"???\",\n  \"type\":\"简答\",\n  \"question\":\"Promise.resolve(1)  \n  .then((res) => {\n      console.log(res)\n      return 2\n  })\n  .catch((err) => {\n      return 3\n  })\n  .then((res) => {\n      console.log(res)\n  })\",\n  \"tag\":3,\n  \"optionA\":\"null\",\n  \"optionB\":\"null\",\n  \"optionC\":\"null\",\n  \"optionD\":\"null\",\n  \"answer\":\"1 2\",\n  \"analysis\":\"promise 可以链式调用。提起链式调用我们通常会想到通过 return this 实现，不过 Promise 并不是这样实现的。promise 每次调用 .then 或者 .catch 都会返回一个新的 promise，从而实现了链式调用。\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/API/API.js",
    "groupTitle": "Questions"
  },
  {
    "type": "Get",
    "url": "/api/get-all-questions",
    "title": "getAllQuestions",
    "group": "Questions",
    "name": "getAllaQuestions",
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"id\":1,\n  \"uploader\":\"shzshz\",\n  \"type\":\"单选\",\n  \"question\":\"下列哪个样式定义后,内联(非块状)元素可以定义宽度和高度\",\n  \"tag\":2,\n  \"optionA\":\"display:inline\",\n  \"optionB\":\"display:none\",\n  \"optionC\":\"display:block\",\n  \"optionD\":\"display:inherit\",\n  \"answer\":\"C\",\n  \"analysis\":\"内联元素加上display：block;后被块级化。块级元素一般是其他元素的容器，可容纳内联元素和其他块状元素，块状元素排斥其他元素与其位于同一行，宽度(width)高度(height)起作用。因此，可以定义其宽度和高度。\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/API/API.js",
    "groupTitle": "Questions"
  }
] });
