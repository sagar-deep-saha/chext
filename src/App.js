// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Navbar from './components/Navbar2';


function App() {
  return (

    <>
      <Navbar title='Thunder' about='About' />
<div className="container">

      <TextForm heading='Ruler'/>
</div>

    </>

  );
}

export default App;
