import {Routes,Route} from 'react-router-dom';
import Image from '../component/image/image'
import ImageLoadDetails from '../component/image/imageLoadDetails/imageLoadDetails';
function CustomRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Image/>}/>
            <Route path='/photo/:id' element={<ImageLoadDetails/>}/>
        </Routes>

    )
}
export default CustomRoutes;