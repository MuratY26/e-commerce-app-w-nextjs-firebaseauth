import { useRouter } from "next/router";
import { redirect } from "next/navigation";



export default  async function Checkout({searchParams} : {searchParams : any}) {
    let isSignedIn = false;
    let totalPrice = searchParams.totalPrice;
/*      fetch(`/api/checksignin`, {method: "GET"}).then((res) => {
        if(res.status !== 200) {
            redirect("/signin");
            isSignedIn = true;
        }
    }) */

    return (
        <div className="w-1/3 bg-green-500 bg-opacity-50 border border-green-600 rounded-md p-4 m-4">Your order is received! <div className="font-bold">Cost: {totalPrice} $</div> </div>
    )
}