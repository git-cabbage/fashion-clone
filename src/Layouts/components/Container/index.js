import classNames from 'classnames/bind'

import React from 'react'
import Slideshow from '../Slideshow'
import styles from './Container.module.scss'

const cx = classNames.bind(styles)

function Container({ children }) {
    return (
        <div className="min-h-[1500px] w-full">
            <Slideshow />
            <div className="flex items-center w-full">{children}</div>
        </div>
    )
}

export default Container
