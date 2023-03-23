import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  {Name: 'Dr. Mahfuz',job: 'singer'},
  {Name: 'Dr. lapuz',job: 'singer1'},
  {Name: 'Dr. dafuz',job: 'singer2'},
  {Name: 'Dr. kafuz',job: 'singer3'}
]
const singerStyle = {
  color: 'purple',
  backgroundColor : 'white',
  
}
function App() {
  const nayoks = ['mohammed','zia', 'bahadur','tuhin'];
  return (
    <div className="App">

   {
    nayoks.map(nayok => <li>{nayok}</li>)
   }  
   {/* {
    nayoks.map(nayok => <Person name={nayok}></Person>)
   } */}
   {
    singers.map(singer=><Person name={singer.Name}></Person>)
   }

    {/* <Person name={nayoks[0]} naiyka= 'Arju' job= 'Buisnessman'></Person>
    <Person name='Bahadur'></Person>
    <Person></Person> */}
   
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
