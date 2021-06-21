import { useState } from 'react';
import './App.css';

function App() {
  const [list,setList] = useState();
  const [value, setValue]= useState();
  let suggestion=[];
  let autoArray=['Pankaj','Rahul','Monty','Golu','Rishabh','Shivam','Manish','Birju','Ranveer'];
  const setInputValue = (e,x)=>{
    setValue(x);
  }
  const onChangeText =(e)=>{
    setValue(e.target.value);
    autoArray.forEach(item =>{
      if (item.substr(0,e.target.value.length).toLocaleUpperCase() === e.target.value.toLocaleUpperCase()) {
           suggestion.push(item);
           setList(
             suggestion.map((x,index)=>(
               <p className='listItem' key={index} onClick={(e)=> setInputValue(e,x)}>{x}</p>
             ))
           )
      } 
      if (e.target.value.length === 0) {
        setList('');
      }
    })
    //console.log("data event",e.target.value);
  }
  return (
    <>
    <h4 className='heading'>Auto Complete demo</h4>
    <div className="container">
       <input value={value} placeholder='Type something here..' className='inputBox' onChange={(event)=> onChangeText(event)} />
    </div>
    <div className='listStyle'>
    {list && list}
    </div>
    </>
  );
}

export default App;
