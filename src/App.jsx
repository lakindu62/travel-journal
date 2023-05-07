
import './App.css'
import Nav from './components/nav.jsx'
import Journal from './components/journal'
import travelData from './assets/data'

function App() {

  
  const travelElHtml = (
    <div className='locationsContainer'>
      {travelData.map((e) => (
        <Journal 
          key={e.id}
          {...e} 
        />
      ))}
    </div>
  );

  




  return (

    <div>
      <Nav />
      
        {travelElHtml}
      
    </div>


  )
}

export default App
