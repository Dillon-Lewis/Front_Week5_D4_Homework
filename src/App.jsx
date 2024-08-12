import Header from './Header';
import About from './About';
import ClassContact from './ClassContact';
import './App.css'

function App() {

  const container = {
    textAlign: "center",
    padding: "10px",
    border: 'double 12px black'
  }
  
  return (
    <>
      <div style={container}>
        < Header />
        < About />
        < ClassContact />
      </div>
    </>
  )
}

export default App
