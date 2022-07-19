import classNames from 'classnames/bind'

import React from 'react'
import Slideshow from '../Slideshow'
import styles from './Container.module.scss'

const cx = classNames.bind(styles)

function Container({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Slideshow />
            <div className={cx('container')}>{children}</div>
        </div>
    )
}

export default Container
