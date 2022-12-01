import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const getValues = async () => {
    const response = await axios.get('http://localhost:8000/path/');
    console.log(response.data);
    navigate('path/');
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={getValues}>Get Into File Explorer</button>
      </header>
    </div>
  );
};

export default MainPage;
