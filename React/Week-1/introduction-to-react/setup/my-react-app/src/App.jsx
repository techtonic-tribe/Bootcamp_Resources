
import reactLogo from './assets/react.svg'  // Importing React logo from local assets
import Button from './components/button'    //  Importing a custom Button component
import { FaFacebook, FaTelegram } from 'react-icons/fa';    // import react icon librery to add icons 
import './App.css'     // Importing CSS for styling,external  css
import Welcome from './components/welcome';
import Animalcard from './components/animalsCard';
import Dog from './assets/dog1.jpg'
import Cat from './assets/cat1.webp'
import Horse from './assets/horse1.webp'

function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px'
  };
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">        {/* Link to Vite website with logo */}   
          <img src={reactLogo} className="logo react" alt="React logo" />    {/* this is for inserting image  */}
        </a>
      </div>
      <h1>React</h1>
           {/* Render the custom Button component */}
        <Button/>
        <Button/>
          {/* prop passing */}
        <Welcome name="developers" />
        <Welcome name="tectonics" />
      
       {/* Render Telegram and facebook icon with specific size and color */}
      <FaTelegram size={30} color="#0088cc" />
      <FaFacebook size={30} color="#0088cc" />
      {/* by prop passing work different cards  */}
      <Welcome name="animals" />
      <div style={containerStyle}>
      <Animalcard title="dogs" image={Dog} />
      <Animalcard  title="cats" image={Cat} />
      <Animalcard  title="horse" image={Horse} />
    </div>

    </>
  )
}

export default App
