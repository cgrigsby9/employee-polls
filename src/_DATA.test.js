import { _saveQuestion, _saveQuestionAnswer, _getUsers} from "./utils/_DATA";

jest.setTimeout(10000);

describe('_saveQuestion', () => {
    it('will return the formatted question is successful', async() => {
        var question = {
            author: "billiejean",
            optionOneText: 'Test 1',
            optionTwoText: 'Test 2',
        };
        var result = await _saveQuestion(question);
        //all fields are being populated
        expect(result.author).toEqual('billiejean');
        expect(result.optionOne.text).toEqual('Test 1');
        expect(result.optionTwo.text).toEqual('Test 2');
    });

    it('will errors out if only one answer is entered', async() => {
        var question = {
            author: "billiejean",
            optionTwoText: 'Test 2',
        };
        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText");
    });
});


describe('_saveQuestionAnswer', () => {
    it('will return true if successful', async() => {
        var object = {
            answer: "optionOne",
            authedUser: "tylerseguin",
            qid: "loxhs1bqm25b708cmbf3g",
            type: "ANSWER_QUESTION"
        }
        var result = await _saveQuestionAnswer(object);
        expect(result).toEqual(true);
    });

    it('will return an error if unsuccessful', async() => {
        var object = {
            answer: "optionOne",
            qid: "loxhs1bqm25b708cmbf3g",
            type: "ANSWER_QUESTION"
        }
        await expect( _saveQuestionAnswer(object)).rejects.toEqual("Please provide authedUser, qid");
    });
});