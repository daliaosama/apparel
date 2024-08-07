import './ImageWraper.css'
import hero from '../../assets/hero-desktop.jpg'
import mobile from '../../assets/mobile.jpg'
function ImageWraper(){
    return(
        <div id="Image">
            <img id="mobile" src={mobile} />
            <img id="desktop" src={hero}/>
        </div>
    )
}
export default ImageWraper