import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Button'
import styles from './Toolbar.module.scss'
import {
    faSearch,
    faCircleUser,
    faShoppingCart,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Toolbar() {
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
