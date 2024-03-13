import axios from 'axios'
import { useParams } from 'react-router-dom';
import './imageLoadDetails.css'
import { useEffect, useState } from 'react';
function ImageLoadDetails(){
    const {id} = useParams();
    const [images,setimages] = useState([]);
    async function downloads(){
        // download images from api with respect to id
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log('ppppp',response.data);
        // set images data in setimages useState
        setimages({
            image:response.data.photo.url
        })
    }
    useEffect(() =>{
        downloads();
    },[]);
    return(
    <div className='whole-wrap'>
        <div className="image-wrap">
            <img className='image' src={images.image}/>
            <div className='about-image'>
                <h1>Space Build policy people model treatment town hard use</h1>
                <p>Much technology how within rather him lay why part actually system increase free</p>
            </div>

        </div>
    </div>
    )
}
export default ImageLoadDetails;