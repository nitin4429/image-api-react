import './imageLoad.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Photo from '../Photo/photo';
function ImageLoad(){
    const[imageList,setimageList] = useState([]);
    const[loading,setLoading]= useState(true);
    async function downloads(){

        // download 20 images from slingacademy api
        const response= await axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
       const imageResult = response.data.photos;// extract data from download api
       console.log('resssss',response.data.photos); // print photo data from image api 
       console.log(imageResult);

       // iterate on api data and extract image and id from them 
       const res =imageResult.map((i)=>{
        const images = i.url;
        return {image :images,
                key:i.id,
                id:i.id
            }
       });
       console.log("result",res);
       setimageList(res);
        setLoading(false);
    }
    useEffect(() =>{
        downloads();
    },[]);

    return(
        <div className='image-load-wrap'>
          
            {(loading)?'loading....':
             imageList.map((p) => <Photo image={p.image} key={p.key} id={p.id} />)}
            </div>
    )
}
export default ImageLoad;