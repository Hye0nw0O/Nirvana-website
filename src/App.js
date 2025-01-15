import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav_bar/nav_bar';
import Main_Cont from './components/main_cont/main_cont';
import Empty from './components/empty/empty';
import Act_cont from './components/act_cont/act_cont';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      {}
      <NavBar />
      <Main_Cont />
      <Empty />
      <Act_cont />
      <Empty />
      <Footer />
    </div>
  );
}

export default App;
