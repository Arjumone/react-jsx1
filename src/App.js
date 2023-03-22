import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {Name: 'Dr. Mahfuz',job: 'singer'}
const singerStyle = {
  color: 'purple',
  backgroundColor : 'white',
  
}
function App() {
  
  return (
    <div className="App">
    <Person name='Zia'naiyka= 'Arju' job= 'Buisnessman'></Person>
    <Person name='Bahadur'></Person>
    <Person></Person>
   
    <Friend></Friend>
    <Friend></Friend>
    <Friend></Friend>
   
    </div>
  );
}
function Person(props){
 
  return (
    <div className='person'>
    <h1>Husband: {props.name}</h1>
    <h1>Wife: {props.naiyka}</h1>
    <p>{props.job}</p>
  </div>
  )


}

function Friend (props){
  // console.log(props);
  return (
    <div className='container'>
      <h3>Name: Arju Mone</h3>
      <p>Job: Web Devloper</p>
    </div>
  )
}
export default App;
