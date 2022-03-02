import './Footer.css'
import { CgMail } from "react-icons/cg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return(
        <div id='footer' className='footer'>
            <h1 className='text-footer'>Contact</h1>
              <div className='footer-content'>
                 <p className='Correo'><CgMail /> h.mejias.ugalde@gmail.com  </p>
                 <p>
                 <a href='https://github.com/HuguitoCR' > <BsGithub /></a>
                 <a href='https://www.linkedin.com/in/hugo-gerardo-mejias-ugalde-122875170'><BsLinkedin/></a>
                 </p>
              </div>
            
        </div>    
    )}




export default Footer;