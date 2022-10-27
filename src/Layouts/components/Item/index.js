import Button from './../Button'

function Item({ url, name, price, id }) {
    return (
        <div className="w-[350px] text-3xl pb-8">
            <img className="w-full h-[350px]" src={url} alt={id} />

            <p className="h-[48px] my-4  overflow-hidden">{name}</p>

            <p className="my-4">{price} $</p>

            <Button
                className="w-[150px] h-12 items-center justify-center my-0 mx-auto p-8 bg-stone-50 shadow-4x-black hover:shadow-2x-black ease-in hover:underline duration-300"
                to="/detail"
                outline
            >
                Buy now
            </Button>
        </div>
    )
}

export default Item
