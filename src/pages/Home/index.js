import React from 'react'
import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import ListItem from '../../Layouts/components/ListItem'
import Item from '../../Layouts/components/Item'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <ListItem title="New Arrials">
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />

                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
            </ListItem>

            <ListItem title="Best Seller">
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />

                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
                <Item
                    id="id"
                    url="https://img.freepik.com/premium-psd/front-side-t-shirt-mockup-template-wooden-table_185216-226.jpg?w=2000"
                    name="New 1"
                    price="140"
                />
            </ListItem>
        </div>
    )
}

export default Home
