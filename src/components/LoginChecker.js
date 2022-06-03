import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

const LoginChecker = (props) => {
    const navigate = useNavigate();
    const loc = useLocation();

    useEffect(() => {
        const logState = props.logState;
        if (logState){
            navigate("/login", {state:{location: loc.pathname}});
        }
    }, [props.logState, loc.pathname, navigate])
}

function mapStateToProps({authedUser}) {
    return {
      logState: (authedUser === null ? true : false),
    };
}

export default connect(mapStateToProps)(LoginChecker);