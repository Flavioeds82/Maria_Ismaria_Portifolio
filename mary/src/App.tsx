import { useState } from 'react';
import reactLogo from './assets/react.svg';
import {Header} from "../components/Header";
import {Body} from "../components/Body";

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  )
}

export default App
