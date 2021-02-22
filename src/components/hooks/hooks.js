import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
    const windowGlobal = typeof window !== 'undefined'

    if (windowGlobal) {
        const [width, setWidth] = useState(window.innerWidth)

        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth)
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize)
            }
        })

        return width
    }
}
