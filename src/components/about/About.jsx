import './About.css';

import logo from './globalProfilesLogo.png';

export function About(){
    return(
        <div className="information_container">
            <div className="image_container">
                <img src={logo}></img>
            </div>
            <div className="information">
                <h2>Global Profiles</h2>
                <h5>Global Profiles is a compilation/hub of the online personas of any people, celebrities or not.
                For more information, please reach out to us using the contacts below.</h5>
            </div>
        </div>
    )
}