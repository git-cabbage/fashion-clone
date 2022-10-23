import React from 'react'
import classNames from 'classnames/bind'

import styles from './ListItem.module.scss'

const cx = classNames.bind(styles)

function ListItem({ title, children }) {
    return (
        <div className={cx('wrapper')}>
            <h1>{title}</h1>
            <hr className={cx('line')} />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    )
}

export default ListItem
