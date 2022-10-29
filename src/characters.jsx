import React, {useState,useEffect} from 'react';
import axios from'axios';
import Grid from'./grid';
function Character() {
    const [charac, setcharac]=useState([]);
    useEffect(()=>{
        axios.get('https://www.breakingbadapi.com/api/characters')
        .then(res=>{
            console.log(res)
            setcharac(res.data)
        })
        .catch(err=>{
            console.log(err)
        })    })
  return (
    <div >
      
      {charac.map(ch=>
      <Grid
      name={ch.name}
      birthday={ch.birthday}
      img={ch.birthday}
      
      />
      
      ) }
      
    </div>
  );
}
export default Character;
