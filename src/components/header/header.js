import './header.css'
import { useNavigate } from 'react-router-dom';
const Header=()=>{
    const navigate = useNavigate();
    const gotoForm=()=>{
        navigate('/form')
    }
    const goToMain=()=>{
        navigate('/main_page')
    }

    return(
        <>
            <nav className="header">
                <section className="logo">
                    <img src={require("../../images/instaclone.png")} onClick={goToMain} alt="logo"/>
                </section>

                <section className="camera-icon">
                  <img src={require("../../images/camera.png")} onClick={gotoForm} alt="logo"/>
                </section>
            </nav>
        </>
    )
}
export default Header;