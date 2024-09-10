import { useState } from 'react';
import './App.css'
// import DataTable from './components/DataTable/DataTable';
import URLGenerator from './components/URLGenerator/URLGenerator';

function App() {

  const [index, setIndex] = useState(''); 
  const [generatedURL, setGeneratedURL] = useState('');
  
  return (
    <div>
      <a className="logo" href="https://montevideotech.dev/" target="_blank" rel="noreferrer">
        <img src="https://montevideotech.dev/wp-content/uploads/2020/09/mvd-tech-1.png" alt="Logo" className="logo"/>
      </a>
      <div className="custom-row">
        <div className='col'>
          <div className="container-box">
            <URLGenerator setIndex={setIndex} index={index} setGeneratedURL={setGeneratedURL}/>
          </div>
        </div>
        { generatedURL ? (
            <div className='col'>
              <div className="container-box">
                 {/* <DataTable index={index} /> */}
                <iframe src={`public/cmcd.html?url=${generatedURL}`}></iframe>
              </div>
            </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}


export default App
