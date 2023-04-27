import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

// import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    // const { user, logout, } = useContext( AuthContext );

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                E-commerce
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to="/marvel"
                    >
                        Clientes
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }  
                        to="/dc"
                    >
                        Admin
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
