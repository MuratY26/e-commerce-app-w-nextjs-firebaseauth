import  Link  from "next/link"
import Image from "next/image"
import localFont from 'next/font/local';

const signika = localFont({src: "../../public/signika/Signika-VariableFont_GRAD\,wght.ttf"});

export default function ItemCard(props) {
    return (
        <Link className={"itemContainer " + signika.className} href={`/product/${props.product.id}`}>
            <div className="itemImageContainer">
                <Image className="itemImage" width={300} height={400} src={props.product.image} alt="product"/>
            </div>
            <p className="itemName">{props.product.title}</p>
            <p className="itemPrice">{props.product.price} $</p>
        </Link>
    )
}