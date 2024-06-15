'use client'

export default function imgLoader({src , width , quality} : {
    src : string , width : number , quality ?: number
}) {
    return `http://localhost:8080/${src}?w=${width}&q=${quality || 75}`
}