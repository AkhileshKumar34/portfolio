import React from 'react'
import './Footer.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';

function Footer() {
    return (
        <div className='footer'>
            <p className="footer-title">Akhilesh</p>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/akhilesh-kumar-831a431ba/" className="footer-icon"><LinkedInIcon/></a>
                <a href="#home" className="footer-icon"><TelegramIcon/></a>
                <a href="https://github.com/AkhileshKumar34" className="footer-icon"><GitHubIcon/></a>
            </div>
            <p className='footer-copyright'>&#169; 2023 copyright all right reserved</p>
        </div>
    )
}

export default Footer
