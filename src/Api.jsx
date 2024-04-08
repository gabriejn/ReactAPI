/*import { createRoot } from "react-dom/client";


const [allData, setAllData] = React.useState([])
    function Picture(
{    fetch ("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllData(data.urls.regular))
    })
        console.log(allData)


createRoot(
 <div>
    <img src={allData} />
 </div> , document.getElementById('root')
)



/*/