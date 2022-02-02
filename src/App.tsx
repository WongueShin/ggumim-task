import React, {FC, useState, useEffect} from 'react';
import Nav from './components/Nav/index.Nav';
import MainView from './components/MainView/index.MainView';

const App: FC = () => {
  const [data, setData] = useState([])
    useEffect(() => {
      fetch("https://cdn.ggumim.co.kr/test/image_product_link.json")
      .then(res => res.json())
      .then(setData)
    },[])
  console.log(data);
  return(
    <>
    <Nav data = {data}/>
    <MainView data = {data}/>
    </>
  )
}

export default App;
