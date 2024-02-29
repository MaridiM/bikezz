import { createClient } from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url/'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
    projectId: 'irae1esj',
    dataset: 'production',
    apiVersion: '2024-01-08',
    useCdn: true,
})

const imgBuilder = ImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return imgBuilder.image(source)
}