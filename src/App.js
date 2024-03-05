import './App.css';
import routes from './routes';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import { useRoutes } from 'react-router-dom';
function App() {
  let router = useRoutes(routes)
  return (
    <div className="App">
      <Header />
        {router}
      <Footer />
    </div>
  );
}

export default App;
