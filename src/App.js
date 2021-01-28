
import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';

export const pageType = {
  PTO: 1,
  Skills: 2,
  Certifications: 3
}

function App() {
  const[counter, setCounter] = useState(0);
   const [currentPage, setCurrentPage] = useState(pageType.Home)


const changePage = (PageTypeNumber) => {
  setCurrentPage(Number(PageTypeNumber));
}

const renderPage = () => {
  //switch on the value of our current page
  switch(currentPage){
    case pageType.Home:return <p> this is my pto</p>
    case pageType.Skills: return <p>this skills</p>
    case pageType.Certifications: return <p>this Certifications</p>
    default: return <p> this is my homepage</p>
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <Navbar changePage={(e) => changePage(e)} />
       <p> -------</p>
       {renderPage()}
       <p>------</p>
       <button onClick={()=> setCounter(counter + 1)}> plus</button>
       <h1>{counter}</h1>
       <button onClick={()=> setCounter(counter - 1)}>minus</button>
      </header>
    </div>
  );
}

export default App;
