import classNames from 'classnames/bind'

import styles from './Slideshow.module.scss'

const cx = classNames.bind(styles)

function Slideshow() {
    return (
        <div className={cx('slideshow')}>
            <h2>Slideshow</h2>
        </div>
    )
}

export default Slideshow
