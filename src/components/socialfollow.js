import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{
    faInstagram,
    faFacebook,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons"

const Socialfollow = () => {
    return (
<div className='social-container'>


{/* <a href="mailto:xyz@abc.com'
className="mail social"
>
<FontAwesomeIcon icon={fa-envelope} size="2x"/> 
</a> */}
<a
 href='https://www.instagram.com/fitreak_kanojia/'
className="instagram social"
>
<FontAwesomeIcon icon={faInstagram} size="2x"/> 
</a>

<a
 href='https://www.linkedin.com/in/adityakanojia24/'
className="linkedin social"
>
<FontAwesomeIcon icon={faLinkedin} size="2x"/> 
</a>

<a
 href='https://www.facebook.com/aditya.kanojia.9887/'
className="facebook social"
>
<FontAwesomeIcon icon={faFacebook} size="2x"/> 
</a>


</div>
)
}

export default Socialfollow
