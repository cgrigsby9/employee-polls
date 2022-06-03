import { _saveQuestion, _saveQuestionAnswer, _getUsers} from "./utils/_DATA";
import { formatDate } from "./utils/helpers";

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
        expect(result.author).toBe(question.author);
        expect(result.id).not.toBeNull();
        expect(result.timestamp).not.toBeNull();
        expect(result.optionOne.text).toBe(question.optionOneText);
        expect(result.optionTwo.text).toBe(question.optionTwoText);
    });

    it('will errors out if the wrong info is passed', async() => {
        var question = {
            author: "billiejean",
            optionTwoText: 'Test 2',
        };
        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText");
    });
});

describe('_getUsers', () => {
    it('will return the list of users if successful', async() => {
        var result = await _getUsers();
        expect(result).not.toBeNull();
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
        await expect( _saveQuestionAnswer(object)).resolves.toBe(true);
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