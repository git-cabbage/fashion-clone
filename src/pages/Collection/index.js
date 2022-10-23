import classNames from 'classnames/bind'
import style from './Collection.module.scss'
import CollectionSheet from './../../Layouts/components/CollectionSheet'

const cx = classNames.bind(style)

function Collection() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Collection Sheet</h1>
            <div className={cx('container')}>
                <CollectionSheet
                    id="1"
                    name="Collection 1"
                    right
                    url="https://images01.nicepage.com/e3/2e/e32ef98fe7aaa720ddb3104ab3b3eb20.jpeg"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod, at quas dolores voluptas obcaecati nihil. Non eligendi asperiores fugit nihil ipsam voluptas voluptatem obcaecati."
                />
                <CollectionSheet
                    id="2"
                    name="Collection 2"
                    left
                    url="https://images01.nicepage.com/b9/30/b930a715ba83dbde269eae0fa924b97c.jpeg"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod, at quas dolores voluptas obcaecati nihil. Non eligendi asperiores fugit nihil ipsam voluptas voluptatem obcaecati."
                />
                <CollectionSheet
                    id="3"
                    name="Collection 3"
                    right
                    url="https://images01.nicepage.com/e3/2e/e32ef98fe7aaa720ddb3104ab3b3eb20.jpeg"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod, at quas dolores voluptas obcaecati nihil. Non eligendi asperiores fugit nihil ipsam voluptas voluptatem obcaecati."
                />
                <CollectionSheet
                    id="4"
                    name="Collection 4"
                    left
                    url="https://images01.nicepage.com/b9/30/b930a715ba83dbde269eae0fa924b97c.jpeg"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod, at quas dolores voluptas obcaecati nihil. Non eligendi asperiores fugit nihil ipsam voluptas voluptatem obcaecati."
                />
            </div>
        </div>
    )
}

export default Collection
