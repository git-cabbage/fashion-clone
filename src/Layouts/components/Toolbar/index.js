import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleUser,
    faSearch,
    faShoppingCart,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons'

import Button from '../Button'
import styles from './Toolbar.module.scss'

const cx = classNames.bind(styles)

function Toolbar() {
    let isSignIn = false

    if (isSignIn) {
    }
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('toolbar')}>
                <Button icon={<FontAwesomeIcon icon={faCircleUser} />} />
                <Button icon={<FontAwesomeIcon icon={faSignOut} />} />
                <Button icon={<FontAwesomeIcon icon={faShoppingCart} />} />
                <Button icon={<FontAwesomeIcon icon={faSearch} />} />
            </ul>
        </div>
    )
}

export default Toolbar
