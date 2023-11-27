
import './App.css';

import Name from './Name';
import Description from './Description';
import Price from './Price';
import Image from './Image';
import clients from './client';



function App() {
  return (
    <div className="App">
  
     <div>
     <div className="card" style={{width: '18rem'}}>
      <Image />
  <div className="card-body  ">
    <Name />
  <Description />
   <Price />
  
  </div>
</div>
     </div>
     <div className="card" style={{width: '18rem'}}>
     <p>Hello {clients.firstname}</p>
     <img src={clients.image} alt='' />
     </div>
     
    </div>
  );
}

export default App;
