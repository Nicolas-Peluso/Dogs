import React from 'react'

function useMedia(media) {
    const [metch, setMetch] = React.useState(null)

    React.useEffect(() => {
        function ChangeMetch() {
            const { matches } = window.matchMedia(media)
            setMetch(matches)
        }
        ChangeMetch()
        window.addEventListener("resize", ChangeMetch)
        return () => window.removeEventListener("resize", ChangeMetch)
    }, [media])

    return metch
}

export default useMedia
