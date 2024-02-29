'use client'
import { CartItem, CheckoutBtn, ScrollArea, Sheet, SheetContent, SheetHeader, SheetTitle } from "@/shared"
import { useShoppingCart } from "use-shopping-cart"

const CartSidebar = () => {
    const { cartCount, cartDetails, shouldDisplayCart, handleCartClick, totalPrice } = useShoppingCart()

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent className="bg-white">
                <SheetHeader>
                    <SheetTitle className="text-left mb-12">
                        My Shopping Cart ({cartCount})
                    </SheetTitle>
                </SheetHeader>
                <>
                    {
                        cartCount === 0  
                            ? <div className="flex flex-col items-center justify-center w-full h-[760px] ">
                                <h5 className="text-black/50">Your cart is empty</h5>
                            </div>
                            : <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
                                {
                                    cartDetails && Object.entries(cartDetails).map(([key, item]) => {
                                        return <CartItem key={key} item={item} />
                                    })
                                }
                            </ScrollArea>
                        
                    }
                </>
                {
                   (cartCount && cartCount > 0) && (
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between gap-4 font-semibold">
                                <div className="uppercase">Total</div>
                                <div>${totalPrice}</div>
                            </div>
                            <CheckoutBtn />
                        </div>
                    )
                }
            </SheetContent>
        </Sheet>
    )
}

export default CartSidebar
