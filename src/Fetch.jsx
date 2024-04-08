
import { useState, useEffect } from 'react';
//const accessKey="-LNZKxd36AmzQRJr3qnqpxg1DsM4srEp8Bpsc7-PO4k"
const accessKey="d3Qk6wq33VuRu5syhl8_Hd2Xr4vbm5Wy-9Nm3gk4eFs"
//const accessKey="ursiD7vOoapHZWKR_E2g7tlq_BecYHXOzBPtlJlVhV8"
const apiUrl = 'https://api.unsplash.com/photos/random';
let displayURL=[]
let photos = []
function Fetch() {
 const [photos, setPhotos] = useState();
  useEffect(() => {
    fetch(`${apiUrl}?client_id=${accessKey}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {

        console.log(data.urls.regular)

        displayURL=(data.urls.regular);
        setPhotos(data);
        photos(data)
      });

 }, []);
       console.log(displayURL.values)

      return  (
<div>
             <h1>Hekko Workd</h1>
             <img src={displayURL} />

                     console.log(data.urls.regular)

  </div>)
 
}
export default Fetch;
<Fetch />
