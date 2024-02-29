export interface Category {
    name: string
}

export interface IBike {
    _id: string
    name: string
    description: string
    images: any[]
    price: number | 0
    price_id:  string | ''
    slug: string
    categories: Category[],
}