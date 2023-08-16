import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Town Maps</h1>
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Home
                </NavLink>
                <a href="/create">New town</a>
            </div>
        </nav>
    );
}

export default Navbar;