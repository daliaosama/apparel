import './InfoWraper.css'
import logo from '../../assets/logo.svg'
import arrow from '../../assets/arrow.svg'
function InfoWraper() {
    return (
        <div id="infoWraper">
          <div id="Logo"> 
            <img  src={logo} id="logo"/> 
          </div>
         <div id="info">
        <div id="Info"> 
        <label id="lab">W E &apos; RE</label>
        <label className="coming">COMING</label>
        <label className="coming">SOON</label>
        <p>Hello fellow shoppers! We &apos; re currently building our new fashion store. 
        Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </div>
         <div id="button"><input type="email" placeholder='    Email Address' />
         <button> <img src={arrow}/></button>
         </div>
        </div> 
      </div>
    )
}
export default InfoWraper