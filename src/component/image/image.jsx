import './image.css'
import ImageLoad from './imageLoad/imageLoad';
function Image(){
    return(
        <div className="Image-Wrapper">
          <h1 className="image-heading">IMAGE API</h1>
          <ImageLoad />
        </div>
    )
}
export default Image;