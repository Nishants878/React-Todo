import classes from './NavBar.module.css'
import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <div className={classes.NavBarMainContainer}>
            <div className={classes.NavBar}>
            <div className={classes.ProductDefinerWrapper}>
                         <h1 className={classes.ProductDetailName}>Todo - List</h1>
                  </div>
                  <div className={classes.PageNavigationWrapper}>
                  <Link className={classes.IconAndLinkWrapper} to="/">
                    <i className={["fas", "fa-home", classes.Icons].join(' ')}></i>  
                    <p className={classes.PageLinkName}>Home</p>
                    </Link>
                      
                    <Link className={classes.IconAndLinkWrapper} to="/accountspage">
                    <i className={["far", "fa-user", classes.Icons].join(' ')}></i> 
                    <p className={classes.PageLinkName}>About Us</p>
                    </Link>
                       
                    <Link className={classes.IconAndLinkWrapper} to="/accountspage">
                    <i className={["fas", "fa-envelope-open-text", classes.Icons].join(' ')}></i> 
                    <p className={classes.PageLinkName}>Policy</p>
                    </Link>

                    <Link className={classes.IconAndLinkWrapper} to="/accountspage">
                    <i className={["fas", "fa-cog", classes.Icons].join(' ')}></i> 
                    <p className={classes.PageLinkName}>Services</p>
                    </Link>
                  </div>
            </div>
        </div>
    )
}


