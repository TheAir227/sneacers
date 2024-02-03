import logo from "/header/Logo.png"
import favorits from "/header/like.svg"
import profile from "/header/profile.svg"
import cart from "/header/cart.svg"

import "./Header.css"

import { NavLink } from "react-router-dom"
import Modal from "../Modal/Modal"

export default function Header() {
    function modal(){
        let modalka = document.getElementById('modal');
        modalka.classList.toggle('hidden');
    }
    return (
        <>
            <header>
            <NavLink to="/">
                    <img className="Logo" src={logo} alt="" />
              </NavLink>
                <nav>
                    <div onClick={modal} id="cart" className="nav-item">
                        <img src={cart} alt="" />
                        <p>1205 руб.</p>
                    </div>
                    <NavLink to="/favorits">
                        <img src={favorits} alt="" />
                        </NavLink>
                    <NavLink to="/profile">
                        <img src={profile} alt="" />
                    </NavLink>
                </nav>
            </header >
            <Modal />
        </>
    )
}