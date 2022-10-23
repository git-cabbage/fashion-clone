import classNames from 'classnames/bind'
import style from './CollectionSheet.module.scss'

const cx = classNames.bind(style)

const handleScroll = () => {}

function CollectionSheet({ left, right, id, description, name, url }) {
    return (
        <div className={cx('wrapper', left ? 'reverse' : null)}>
            <div className={cx('container')}>
                {left ? (
                    <div className={cx('image', 'image-left')}>
                        <img src={url} alt={name} />
                    </div>
                ) : null}
                <div className={cx('content', left ? 'left' : 'right')}>
                    <h1>{id}</h1>
                    <div className={cx('underline-text')}></div>
                    <h1>{name}</h1>
                    <div className={cx('underline-text')}></div>
                    <h2>{name}</h2>
                    <p>Description: {description}</p>
                    <button className={cx('btn-buy')}>shop now</button>
                </div>
                {right ? (
                    <div className={cx('image', 'image-right')}>
                        <img src={url} alt={name} />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default CollectionSheet
