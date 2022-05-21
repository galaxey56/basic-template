import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import Banner from './Components/Banner';
import Feed from './Components/Feed';
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Feed />
    </div>
  );
}

export default App;
