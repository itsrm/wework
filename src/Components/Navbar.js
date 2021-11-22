import {Link} from 'react-router-dom'
import logo from '../Images/logo.png'
const Navbar = () => {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbar-backg-trans" style={{
                position: 'fixed',
                width: '100%',
                paddingTop: '1.75rem'
            }}>
                <div className="container-fluid"> 
                    <img className="navbar-brand" src = {logo} alt="logo" style={{
                        width: '30px',
                    }}/>
                    <h3 style={{
                        fontSize: '1.75rem',
                        fontWeight: '700',
                        fontFamily: 'MontSerrat',
                        marginRight: "50px",
                    }}>WeWork</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>Home</li>
                            <li>Groups</li>
                            <li>Events</li>
                            <li>Team</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="navBlur">



            </div>
        </>
     );
}
 
export default Navbar;