import React from 'react'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, icon, onClick, className, ...passProps }) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps,
    }

    //change button/a condition
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
    })

    const handleOnClick = () => {}

    return (
        <Comp className={classes} onClick={handleOnClick} {...passProps}>
            <span className={cx('icon')}>{icon}</span>
        </Comp>
    )
}

export default Button
