import classNames from 'classnames/bind'

import styles from './Item.module.scss'
import Button from './../Button'

const cx = classNames.bind(styles)

function Item({ url, name, price, id }) {
    return (
        <div className={cx('item')}>
            <img src={url} alt={id} />
            <p className={cx('item-name')}>{name}</p>
            <p className={cx('item-price')}>{price} $</p>
            <Button className={cx('btn-detail')} to="/detail" outline>
                Buy now
            </Button>
        </div>
    )
}

export default Item
