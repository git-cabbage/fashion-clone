import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './Footer.module.scss'
import Card from '../Card'
import {
    faFacebook,
    faInstagram,
    faTiktok,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Card>
                    <img src="./Layer1.png" alt="logo-mini" />
                    <p className={cx('content')}>
                        H Store rất vinh hạnh khi được phục vụ quý khách. Niềm
                        vui của quý khách tạo nên giá trị của chúng tôi, mang
                        đến cơ hội phát triển của chúng tôi. Cám ơn bạn đã ghé
                        thăm xin cảm ơn.
                    </p>
                </Card>
                <Card title="Theo dõi chúng tôi">
                    <ul className={cx('follow')}>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faYoutube} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTiktok} />
                        </li>
                    </ul>
                </Card>
                <Card title="Thông tin liên lạc">
                    <ul className={cx('contact')}>
                        <li>hstore@store.mail.com</li>
                        <li>Nguyễn Tri Phương, P.12, Quận 10</li>
                        <li>0563.406.922</li>
                    </ul>
                </Card>
            </div>
        </div>
    )
}

export default Footer
