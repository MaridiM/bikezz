import Image from "next/image"
import { FC } from "react"
import { urlFor } from "../libs/sanity"
import { FaMinus, FaPlus, FaX } from "react-icons/fa6"
import { useShoppingCart } from "use-shopping-cart"

interface CartItemProps {
    item: any
}

const CartItem: FC<CartItemProps> = ({ item }) => {
    const { removeItem, incrementItem, decrementItem } = useShoppingCart()

    return (
        <div className="flex w-full justify-between mb-4 items-center h-[200px] border-b">
            {/* image */}
            <div className="w-[110px] h-[110px] relative">
                <Image
                    src={urlFor(item.image[0]).url()}
                    sizes='(max-width: 110px) 110px 110px'
                    className="object-contain"
                    alt={item.name}
                    fill
                    priority
                />
            </div>
            {/* image, price, quantity, remove */}
            <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
                <div className="flex items-center justify-between">
                    <h5>{item.name}</h5>
                    <button onClick={() => removeItem(item.id)}>
                        <FaX className="text-sm" />
                    </button>
                </div>
                {/* increment, decrement, item price */}
                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        <button onClick={() => decrementItem(item.id)}>
                            <FaMinus className="text-[10px]" />
                        </button>
                        <div className="font-semibold">{item.quantity}</div>
                        <button onClick={() => incrementItem(item.id)}>
                            <FaPlus className="text-[10px]" />
                        </button>
                    </div>
                    <div className="font-semibold">${item.price * item.quantity}</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
