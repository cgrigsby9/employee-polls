import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../../actions/authedUser";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = (props) => {
    const { users, dispatch } = props;
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedOption(e.target.value);
        console.log(e.target.value);
        if(e.target.value === 'billiejean'){
            dispatch(setAuthedUser(e.target.value))
            navigate(location.state.location);

        }
        if(e.target.value === 'tylerseguin'){
            dispatch(setAuthedUser(e.target.value))
            navigate(location.state.location);

        }
        if(e.target.value === 'tomrose'){
            dispatch(setAuthedUser(e.target.value))
            navigate(location.state.location);

        }
        if(e.target.value === 'danmorrison'){
            dispatch(setAuthedUser(e.target.value))
            navigate(location.state.location);

        } else if(e.target.value !== ''){
            dispatch(setAuthedUser(''));
            navigate("/login");
        }
    }

    

    return (
      <div className="form">
      <form  onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input data-testid="form" name={users.id} onChange={handleSubmit} value={selectedOption} className="user-dropdown" required />
        </div>
      </form>
    </div>
    )
}

function mapStateToProps(state) {
    const users = state.users
    return {
      userIds: Object.keys(users),
      users
    }
}
  
export default connect(mapStateToProps)(LoginPage)