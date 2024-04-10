import React from 'react';
import banniereFooter from '../assets/banniereFooter.png';
import LOGO from '../assets/LOGO.png';


function Footer() {

	return (
    <div className="style-footer">
        <div className="logo_footer">
        <img src={LOGO} alt='logo KASA' />
        </div>
        <div className="copyRight_footer">
        <img src={banniereFooter} alt='banniere copy right' />
        </div>
    </div>
    )
	
}
export default Footer