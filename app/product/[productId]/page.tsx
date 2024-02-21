import ProductImage from "./productImage";
import styles from "./productPage.module.css";
import products from "@/public/products.json";
import AddToFav from "./AddToFav";
import AddToCart from "./AddToCart";
import Rate from "./rate";

export default function ProductPage({ params }: { params: any }) {
  const productId = params.productId;
  const product = products.find((item) => item.id == productId);

  return (
    <>
      <div
        className={
          styles.container +
          " flex" +
          " flex-row" +
          " gap-x-28" +
          " justify-center"
        }
      >
        <div className={styles.itemImage + " p-6"}>
          <ProductImage image={product?.image} />
        </div>
        <div className={styles.productInfo}>
          <h2 className={styles.productTitle}>{product?.title}</h2>
          <Rate rate={product?.rating.rate} rateCount={product?.rating.count} />
          <p className={styles.description}>{product?.description}</p>
          <p className={styles.price}>{product?.price} $</p>
          <div className={styles.addTo}>
            <AddToCart productId={productId} />
            <AddToFav productId={productId} />
          </div>
          <div
            className={
              styles.shippingPolicy + " mt-12" + " text-l text-slate-800"
            }
          >
            Thank you for shopping with us at Let's Go Shop. We strive to
            provide you with the best shopping experience, including fast and
            reliable shipping services.
            <h2 className="text-xl mt-2 text-black">Shipping Methods</h2>
            <div className="mt-1 text-black">
              Standart Shipping: Orders are processed within 1-2 business days,
              and delivery typically takes 3-5 business days.
              <br />
              Expedited Shipping: Orders are processed within 1 business day,
              and delivery typically takes 1-3 business days.
            </div>
          </div>
          <div className={styles.returnPolicy}></div>
        </div>
      </div>
    </>
  );
}
