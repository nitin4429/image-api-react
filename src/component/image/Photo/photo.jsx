import { Link } from 'react-router-dom';
import './photo.css';
function Photo({image,id}){
    return(
        <div>
           
            <Link to={`/photo/${id}`}>
            <div className="image-wrapper">
                <img className="images" src={image}/>
            </div>
            </Link>
        </div>
    )
}
export default Photo;