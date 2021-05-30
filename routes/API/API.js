/**
 * @api {Get} /api/get-all-questions getAllQuestions
 * @apiGroup Questions
 * @apiName getAllaQuestions
 *
 * @apiSuccessExample  {json} Response-Example
 * {
 *   "id":1,
 *   "uploader":"shzshz",
 *   "type":"单选",
 *   "question":"下列哪个样式定义后,内联(非块状)元素可以定义宽度和高度",
 *   "tag":2,
 *   "optionA":"display:inline",
 *   "optionB":"display:none",
 *   "optionC":"display:block",
 *   "optionD":"display:inherit",
 *   "answer":"C",
 *   "analysis":"内联元素加上display：block;后被块级化。块级元素一般是其他元素的容器，可容纳内联元素和其他块状元素，块状元素排斥其他元素与其位于同一行，宽度(width)高度(height)起作用。因此，可以定义其宽度和高度。"
 * }
 *
 */

/**
* @api {Get} /api/get-10-random-questions get10RandomQuestions
* @apiGroup Questions
* @apiName get10RandomQuestions
*
*
* @apiSuccessExample  {json} Response-Example
* {
 *   "id":1,
 *   "uploader":"shzshz",
 *   "type":"单选",
 *   "question":"下列哪个样式定义后,内联(非块状)元素可以定义宽度和高度",
 *   "tag":2,
 *   "optionA":"display:inline",
 *   "optionB":"display:none",
 *   "optionC":"display:block",
 *   "optionD":"display:inherit",
 *   "answer":"C",
 *   "analysis":"内联元素加上display：block;后被块级化。块级元素一般是其他元素的容器，可容纳内联元素和其他块状元素，块状元素排斥其他元素与其位于同一行，宽度(width)高度(height)起作用。因此，可以定义其宽度和高度。"
 * }...
*/

/**
* @api {Get} /api/get-10-random-single-choice-questions get10RandomSingleChoiceQuestions
* @apiGroup Questions
* @apiName get10RandomSingleChoiceQuestions
*
*
* @apiSuccessExample  {json} Response-Example
* { 
*   "id":39,
*   "uploader":"???",
*   "type":"单选",
*   "question":"<img>标记符中连接图片位置的参数是",
*   "tag":1,
*   "optionA":"href",
*   "optionB":"src",
*   "optionC":"type",
*   "optionD":"align",
*   "answer":"B",
*   "analysis":"无"
* }
*/

/**
* @api {Get} /api/get-5-random-short-answer-questions get5RandomShortAnswerQuestions
* @apiGroup Questions
* @apiName get5RandomShortAnswerQuestions
*
* @apiSuccessExample  {json} Response-Example
* { 
*   "id":96,
*   "uploader":"???",
*   "type":"简答",
*   "question":"Promise.resolve(1)  
*   .then((res) => {
*       console.log(res)
*       return 2
*   })
*   .catch((err) => {
*       return 3
*   })
*   .then((res) => {
*       console.log(res)
*   })",
*   "tag":3,
*   "optionA":"null",
*   "optionB":"null",
*   "optionC":"null",
*   "optionD":"null",
*   "answer":"1 2",
*   "analysis":"promise 可以链式调用。提起链式调用我们通常会想到通过 return this 实现，不过 Promise 并不是这样实现的。promise 每次调用 .then 或者 .catch 都会返回一个新的 promise，从而实现了链式调用。"
*}
*/

/**
* @api {Get} /api/get-5-random-fill-blank-questions get5RandomFillBlankQuestions
* @apiGroup Questions
* @apiName get5RandomFillBlankQuestions
*
*
* @apiSuccessExample  {json} Response-Example
* { 
*   "id":114,
*   "uploader":"shzshz",
*   "type":"填空",
*   "question":"8789___122___4165365",
*   "tag":3,
*   "optionA":"null",
*   "optionB":"null",
*   "optionC":"null",
*   "optionD":"null",
*   "answer":[['111','222'],['333']],
*   "analysis":"753753"
* }
*/

const express = require('express')
const router = express.Router()
const getQuestionsController = require('../../controller/getQuestionsController')
const loginController = require('../../controller/loginController')
const getExamsController = require('../../controller/getExamsController')

//获取题目
router.get('/get-all-questions', getQuestionsController.getAllQuestions)
router.get('/get-10-random-questions', getQuestionsController.get10RandomQuestions)
router.get('/get-10-random-single-choice-questions', getQuestionsController.get10RandomSingleChoiceQuestions)
router.get('/get-5-random-short-answer-questions', getQuestionsController.get5RandomShortAnswerQuestions)
router.get('/get-5-random-fill-blank-questions', getQuestionsController.get5RandomFillBlankQuestions)

//获取考试
router.get('/get-all-exams', getExamsController.getAllExams)
router.get('/get-exam-by-Id', getExamsController.getExamById)

module.exports = router
