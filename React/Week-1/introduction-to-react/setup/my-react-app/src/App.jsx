
import reactLogo from './assets/react.svg'  // Importing React logo from local assets
import Button from './components/button'    //  Importing a custom Button component
import { FaFacebook, FaTelegram } from 'react-icons/fa';    // import react icon librery to add icons 
import './App.css'     // Importing CSS for styling,external  css

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">        {/* Link to Vite website with logo */}   
          <img src={reactLogo} className="logo react" alt="React logo" />    {/* this is for inserting image  */}
        </a>
      </div>
      <h1>Vite + React</h1>
           {/* Render the custom Button component */}
        <Button/>
        <Button/>
        
      
       {/* Render Telegram and facebook icon with specific size and color */}
      <FaTelegram size={30} color="#0088cc" />
      <FaFacebook size={30} color="#0088cc" />
    </>
  )
}

export default App
