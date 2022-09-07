
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import { FirebaseError } from 'firebase/app';
import './App.css';
import app from './firebase.init';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const handleGooglesignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.log('error',error);
    })
  }
  return (
    <div className="App">
       <button onClick={handleGooglesignIn}>Google Sign in</button>
    </div>
  );
}

export default App;
