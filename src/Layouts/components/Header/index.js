import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import { publicLink } from '../../../router'
import styles from './Header.module.scss'
import Toolbar from '../Toolbar'

const cx = classNames.bind(styles)

function Header() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('menu')}>
                <div className={cx('menu-list')}>
                    {publicLink.map((route, index) => (
                        <li key={index} className={cx('menu-item')}>
                            <Link to={route.path}>{route.title}</Link>
                        </li>
                    ))}
                </div>
            </ul>
            <Toolbar />
        </div>
    )
}

export default Header
