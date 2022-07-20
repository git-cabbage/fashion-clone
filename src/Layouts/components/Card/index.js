import classNames from 'classnames/bind'

import styles from './Card.module.scss'

const cx = classNames.bind(styles)

function Card({ children, title }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title ? title : null}</h2>
            {children}
        </div>
    )
}

export default Card
