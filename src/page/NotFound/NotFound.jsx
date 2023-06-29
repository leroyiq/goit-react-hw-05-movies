import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import page404 from '../../Api/404-error.jpg';

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);
  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <h2>This page automatic redirect you to Home Page. Please wait.</h2>
      <img src={`${page404}`} alt="Error! Sorry" />
    </div>
  );
};

export default NotFound;
