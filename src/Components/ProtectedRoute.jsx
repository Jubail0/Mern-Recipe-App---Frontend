
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const [cookies,_] = useCookies(["access_token"]);
    const navigate = useNavigate();
    if(cookies.access_token){
        return (
            children
          )
    }else{
        navigate("/")
    }
 
}

export default ProtectedRoute