import React, { useState, useEffect } from 'react'
import './App.css';
import { BsFillPersonFill, } from 'react-icons/bs'
import { FaSearchLocation, FaPhone } from 'react-icons/fa'
import {  MdEmail } from 'react-icons/md'
import Button from './Button'

// //DRY 
// let url1 = 'https://randomuser.me/api/home';
// let url2 = 'https://randomuser.me/api/profile';
// let url3 = 'https://randomuser.me/api/contact';


// let baseUrl = 'https://randomuser.me/api/1.3'
// let getHome  = baseUrl + '/home'
// let getProfile = baseUrl + '/profile'
// let getContact = baseUrl + '/contact'
const url = `https://randomuser.me/api/?gender=male`;

function App() {
const [person, setPerson] = useState([])

useEffect(() => {
  randomPerson()
}, [])

async function getRandomPerson () {
  const response = await fetch(url)
  const json = await response.json()
  setPerson(json.results)
  console.log( person);
}
  

  const randomPerson = () => {
    getRandomPerson ()
    
  }

  return (
    <div className="App">
     <div className='image'>
       {person.map((i)=><img className='picture' src={i.picture.large} alt='random person'/>)}
     </div>
     <section className='section-center'>
       <div className='information-container'>
         <BsFillPersonFill />{person.map((i)=><p>Name : {i.name.first}</p>)}
       </div>
        <div className='information-container'>
          <BsFillPersonFill />{person.map((i)=><p>Last Name : {i.name.last}</p>)}
        </div>
        <div className='information-container'>
          <FaSearchLocation />{person.map((i)=><p>Location : {i.location.city}</p>)}
        </div>
        <div className='information-container'>
          <FaPhone />{person.map((i)=><p>Phone : {i.phone}</p>)}
        </div>
        <div className='information-container'>
          <MdEmail />{person.map((i)=><p>Email : {i.email}</p>)}
        </div>
        <div className='button-container'>
      <Button onClick={randomPerson} />
     </div> 
     </section>
     
    </div>
  );
}

export default App;
