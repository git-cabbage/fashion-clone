import React from 'react'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    icon,
    onClick,
    className,
    outline = false,
    children,
    ...passProps
}) {
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
        outline,
    })

    const handleOnClick = () => {}

    return (
        <Comp className={classes} onClick={handleOnClick} {...props}>
            {icon ? (
                <p className="flex items-center justify-center text-4xl px-4 py-2 cursor-pointer">
                    {icon}
                </p>
            ) : null}
            {children}
        </Comp>
    )
}

export default Button
