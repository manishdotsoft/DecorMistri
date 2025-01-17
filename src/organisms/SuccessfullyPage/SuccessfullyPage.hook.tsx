import { useNavigate } from "react-router-dom";

export const useSuccessfullyPageLogic = ()=>{
    
    const navigate = useNavigate();
    const handleClick = () =>{
      navigate('/');
    }
    return{handleClick}
}