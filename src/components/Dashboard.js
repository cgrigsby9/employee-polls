import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import LoginChecker from "./LoginChecker";

const Dashboard = (props) => {
    const {completed, upcoming, users} = props;

    return (
        <div className="container home">
            <LoginChecker/>
            
                    <div className="upcoming">
                        <h3>Upcoming Questions</h3>
                        <ul className="upcoming">
                            {upcoming.map((question) => (
                            <li key={question}>
                            <QuestionCard id={question.id} question={question} user={users[question.author]} />
                             </li>
                            ))}
                         </ul>
                        {
                        }
                    </div>
                <div className="completed">
                    <h3>Completed Questions</h3>
                    <ul className="completed">
                            {completed.map((question) => (
                            <li key={question}>
                            <QuestionCard id={question.id} question={question} user={users[question.author]} />
                             </li>
                            ))}
                         </ul>
                    </div>
        </div>
    )
}

function mapStateToProps({authedUser, questions, users}) {
    const questionsList = Object.keys(questions).map(question => questions[question]);
    const completed = questionsList.filter(question => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)).sort((a, b) => b.timestamp - a.timestamp);
    const upcoming = questionsList.filter(question => !completed.includes(question)).sort((a, b) => b.timestamp - a.timestamp);
    return {
      questions,
      completed,
      upcoming,
      users,
    };
  }
  
  export default connect(mapStateToProps)(Dashboard);