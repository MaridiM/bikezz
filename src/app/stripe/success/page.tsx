'use client'
import Link from "next/link"
import { useEffect } from "react"
import { useShoppingCart } from "use-shopping-cart"

const SuccessPage = () => {
    const { clearCart, cartDetails } = useShoppingCart()
    useEffect( () => {
        cartDetails && Object.keys(cartDetails).length && clearCart()
    }, [cartDetails, clearCart])
    return (
        <div className="py-72">
            <div className="container mx-auto">
                <h3 className="text-center mb-4">
                    Your payment was successful! Thank you!
                </h3>

                <Link href='/'>
                    <button className="btn btn-primary mx-auto">
                        Back to the homepage
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SuccessPage
