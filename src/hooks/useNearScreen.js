import { useEffect, useState, useRef } from 'react'

export const useNearScreen = ({ once = true }) => {
    const [isNearScreen, setNearScreen] = useState(false)
    const fromRef = useRef()

    useEffect(() => {
        let observer

        const onChange = (entries, observer) => {
            const el = entries[0]

            if (el.isIntersecting) {
                setNearScreen(true)
                once && observer.disconnect()
            } else {
                !once && setNearScreen(false)
            }
        }

        Promise.resolve(
            typeof IntersectionObserver != 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                threshold: 1,
            })
            if (fromRef.current) {
                observer.observe(fromRef.current)
            }
        })

        return () => observer && observer.disconnect()
    }, [])

    return { isNearScreen, fromRef }
}
