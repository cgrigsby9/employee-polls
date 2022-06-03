import { connect } from "react-redux"
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router";
import { useState } from "react";
import LoginChecker from "./LoginChecker";

const NewQuestion = ({dispatch, authedUser}) => {
    const navigate = useNavigate();
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');

    const handleChangeOptionOne = (e) => {
        const text = e.target.value;
        setOptionOne(text);
    }

    const handleChangeOptionTwo = (e) => {
        const text = e.target.value;
        setOptionTwo(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            dispatch(handleAddQuestion(optionOne, optionTwo))

        } catch (e) {
            console.log(e)
        }
        setOptionOne("");
        setOptionTwo("");
        navigate("/")
    };

    return (
        <div className="poll-container">
            <LoginChecker/>
            <h2>Would you rather...</h2>
            <form name="question-form" className="new-question" onSubmit={handleSubmit}>
                <label className="large-label" htmlFor="optionOneValue">
                    First Option
                    <input data-testid="option-one-input" placeholder="Option one" onChange={handleChangeOptionOne} value={optionOne} name="optionOneValue"/>
                </label>
                <label className="large-label" htmlFor="optionTwoValue">
                    Second Option
                    <input data-testid="option-two-input" placeholder="Option two" onChange={handleChangeOptionTwo} value={optionTwo} name="optionTwoValue"/>
                </label>
                <button data-testid="option-submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);