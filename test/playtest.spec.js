var makeNum = require('../play.js').makeNum
var shuffledArray = require('../play.js').shuffledArray
var seperateUserNum = require('../play.js').seperateUserNum

const assert = require('assert')

describe ('Test suite', function () {
  it ('should do makeNum()', function () {
    var resultNum = makeNum()
    console.log(resultNum)
  })
  it ('should be shuffled', function () {
    var arrayBeforeShuffled = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var shuffledArrayCopy = shuffledArray()
    assert.strict.equal(shuffledArrayCopy.sort(), arrayBeforeShuffled)
    assert.strict.equal(shuffledArrayCopy.length, 10)
  })
  it ('should be seperated', function () {
    var userNum = 1259
    assert.strict.equal(seperateUserNum(userNum).length, 4)
  })
})
