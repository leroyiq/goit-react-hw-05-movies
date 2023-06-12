import { ApiServices } from 'components/Api/ApiServices';

const Home = () => {
  const data = ApiServices();
  console.log(data);
  return <>{/* <p>{data}</p> */}</>;
};

export default Home;
