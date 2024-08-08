import './ImageWraper.css'
import hero from '../../assets/hero-desktop.jpg'
import mobile from '../../assets/mobile.jpg'
import Logo from '../../Components/Logo/Logo';

function ImageWraper(){
    return(
        <div id="Image">
            <div id="right">
            <Logo></Logo>
            </div>
            <img id="mobile" src={mobile} />
            <img id="desktop" src={hero}/>
        </div>
    )
}
export default ImageWraper