import React, {FC} from 'react';
import styled from 'styled-components';
import Nav from './components/Nav/index.Nav';

const fetchData = (url:string) => {
  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
} 

const App: FC = () => {
  fetchData("https://cdn.ggumim.co.kr/test/image_product_link.json");
  return(
    <>
    <Nav/>
    <div>
      App
    </div>
    </>
  )
}

export default App;
