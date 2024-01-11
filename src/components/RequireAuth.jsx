import { connect } from "react-redux";
import {useNavigate} from "react-router-dom"
import {useEffect} from "react";
const RequireAuth = ({user, children}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        if (!user) {
            navigate("/", {replace: true});
            return;
        }
    },[user,navigate]);
    return children;
} 
const mapStateToProps = (state) => {
    return {
        user : state.userState.user,
    }
}
export default connect(mapStateToProps)(RequireAuth);