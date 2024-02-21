import  Link  from "next/link"
export default function ItemCard(props) {
    return (
        <Link className="itemContainer" href={`/product/${props.product.id}`}>
            <div className="itemImageContainer">
                <img className="itemImage" src={props.product.image} alt="product"/>
            </div>
            <p className="itemName">{props.product.title}</p>
            <p className="itemPrice">{props.product.price} $</p>
        </Link>
    )
}