import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const styles = {
    activeLink: {
        color: '#ffffff',
        backgroundColor: 'rgb(70, 100, 100)',
        borderColor: 'rgb(50, 80, 100)',
    },
};

export default function AuthNav() {
    return (
        <div>
            <NavLink
                to="/register"
                exact
                className={s.link}
                activeStyle={styles.activeLink}
            >
                Sign up
      </NavLink>
            <NavLink
                to="/login"
                exact
                className={s.link}
                activeStyle={styles.activeLink}
            >
                Sign in
      </NavLink>
        </div>
    );
}