import './App.css';
import Productlist from './Productlist';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"LAPTOP", price:"75000", img:"phone.jpeg"},{no:"2",name:"DRESS", price:"1500", img:"Car.png"},{no:"3",name:"SAMSUNG MOBILE", price:"25000", img:"phone.jpeg"}]}/>
    </div>
  );
}

export default App;