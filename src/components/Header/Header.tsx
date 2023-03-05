import Menu from "../Menu/Menu"

import './header.css'

const Header = () =>{
    return (
        <header className="header">
            <div className="wrapper">
                <Menu />
                <div className="title">
                    Пятнашки
                </div>
            </div>
        </header>
    )
}

export default Header;