'use client'

import { FC, ReactNode } from "react"
import { useShoppingCart } from "use-shopping-cart"
import { Product } from "use-shopping-cart/core"
import { useToast } from "../libs/hooks/use-toast"

interface AddToCartBtnProps {
    className?: string
    text?: string
    icon?: ReactNode
    id?: string
    name: string
    currency: 'USD' | 'EUR' | 'RUB' | 'UAN'
    description: string
    images: any 
    price: number
    price_id: string
}

const AddToCartBtn: FC<AddToCartBtnProps> = ({ className, text, icon, name, currency, description, images, price, price_id }) => {
    const { addItem } = useShoppingCart()
    const { toast } = useToast()
    
    const bike: Product = { id: price_id, currency, name, description, image: images, price, price_id }
    return (
        <button className={className} onClick={() => (
            addItem(bike),
            toast({
                title: `${name} has been added to the cart`
            })
        )}>
            <div>{text}</div>
            <div>{icon}</div>
        </button>
    )
}

export default AddToCartBtn
