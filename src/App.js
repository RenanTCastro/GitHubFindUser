import './App.css';
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';
import UserInfo from './components/userInfo/userInfo';

function App() {
  return (
    <div className='App'>
      <Header/>
      <SearchBar/>
      <UserInfo/>
    </div>
  );
}

export default App;
