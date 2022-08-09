import React from 'react';
import { BsFillPersonFill} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import { Button } from '.';


const Header = React.memo((props)=>{

    console.log("check");

    return (
        <div className="header">
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container p-1 align-items-center">
                    <div className="d-flex align-items-center">
                    <Link className="navbar-brand" to="/" >MyMovies</Link>
                    <ul className="navbar-nav mb-0 flex-row align-items-center">
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={"active"} to="/searchSingle/movie" >Фильмы</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={"active"} to="/searchSingle/tv" >Сериалы</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName={"active"} to="/searchactor" >Актёры</NavLink>
                        </li>
                        </ul>
                    </div>
                    <div className="user-action d-flex justify-content-between">
                        <Link to="/search">
                            <Button type={"secondary"} >
                                    <i><BiSearchAlt /></i>
                            </Button>
                        </Link>
                        <Link to="/profile" >
                            <Button type={"primary"} bold>
                                <i><BsFillPersonFill /></i>
                            </Button>
                            
                        </Link>
                    </div>
                  </div>
              </nav>
        </div>
    )
})


export default Header;