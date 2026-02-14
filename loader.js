export default function myImageLoader({ src, width, quality }) {
    const separator = src.includes('?') ? '&' : '?'
    return `${src}${separator}w=${width}&q=${quality || 75}`
}
