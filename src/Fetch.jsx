import { useState, useEffect } from 'react';
import './App.css'
const apiUrl = 'https://api.unsplash.com/photos/random';
let displayURL=[]
let displayURL1=[]
let textcontent= []
let textcontent1= []
let accessKey =prompt('enter your api key');

function Fetch() {
 const [photos, setPhotos] = useState();
  useEffect(() => {
    fetch(`${apiUrl}?client_id=${accessKey}`)
      .then((res) => {
        return res.json();

      })
      .then((data) => { 

        textcontent=data.alt_description
         textcontent = textcontent.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());


        displayURL=(data.urls.regular);
        setPhotos(data);
      });

 }, []);
 useEffect(() => {
  fetch(`${apiUrl}?client_id=${accessKey}`)
    .then((res) => {
      return res.json();

    })
    .then((data) => { 

      console.log(data.urls.regular)
      
      displayURL1=(data.urls.regular);
      textcontent1=data.alt_description
      textcontent1 = textcontent1.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

      console.log(data.location)

      setPhotos(data);
    });

}, []);

      return  (
<div >
             <h1>Gabriel N. Unsplash API Project</h1>
             <div className='divbox'>
              <div className='firstimage'>
             <img id= 'imgdisplay' style={{maxHeight:'55vh'}} src={displayURL1} />
             <br></br>
             <h2>{textcontent1}</h2>
              </div>
             <div className='secondimage'>
             <img id= 'imgdisplay'style={{maxHeight:'55vh'}} src={displayURL} />
             <h2>{textcontent}</h2>
              </div>
</div>
  </div>)
 
}
export default Fetch;
<Fetch />
