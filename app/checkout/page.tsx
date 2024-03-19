export default async function Checkout({
  searchParams,
}: {
  searchParams: any;
}) {
  let totalPrice = searchParams.totalPrice;
  totalPrice = Number(totalPrice);
  totalPrice = encodeURIComponent(totalPrice); //is it safe(html injection vs?)

  return (
    <div className="w-1/3 bg-green-500 bg-opacity-50 border border-green-600 rounded-md p-4 m-4">
      Your order is received!{" "}
      <div className="font-bold">Cost: {totalPrice} $</div>{" "}
    </div>
  );
}
