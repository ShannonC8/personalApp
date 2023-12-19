import { useRef } from "react";
import { Link } from "react-router-dom";
import closeImg from '../assets/close.png'
import menuImg from '../assets/menu.png'
import heartImg from '../assets/heart.png'
import "../styles/Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="name-container">
                <img
                    src={heartImg}
                    alt="Heart Image"
                    style={{ width: "30px", height: "auto" }}
                />
                <h3>Shannon Cheng</h3>
                </div>
            </Link>
			<nav ref={navRef}>
				<a href="/#" onClick={showNavbar}>About me </a>
				<a href="/#" onClick={showNavbar}>Projects</a>
				<a href="/#" onClick={showNavbar}>Contact</a>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <img src={closeImg} 
                         alt="Close Navigation" 
                         className="menu-img" 
                         style={{ width: "30px", height: "auto" }}
                         />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<img src={menuImg} 
                     alt="Open Navigation" 
                     className="menu-img"
                     style={{ width: "30px", height: "auto" }}
                     />
			</button>
		</header>
	);
}

export default Navbar;