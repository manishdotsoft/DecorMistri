
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { loginUserMutation } from '../../graphql/mutation/loginUser';

const initialValues = {
    email: '',
    password: '',
  };

interface LoginFormValues {
    email: string;
    password: string;
  }

export const useLoginLogic = () =>{

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async(values:LoginFormValues) =>{
      try{
        const response = await(loginUserMutation({input:{
          email:values.email,
          password:values.password,
        }}))
        if(response){
          console.log('loggedin successfully');
        }
      }catch(err){
        console.log(err);
      }
    }

    return{
        dispatch,
        initialValues,
        handleSubmit
    }
}