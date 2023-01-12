export default function myLoader({ src, width, quality }) {
    return `https:localhost:3000/${src}?w=${width}&q=${quality || 75}`
}
