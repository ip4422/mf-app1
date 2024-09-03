import { useRef, useEffect } from 'react'
import { createRoot, Root } from 'react-dom/client'

const useSingleReactRoot = (idTag?: string) => {
  const rootRef = useRef<Root | null>(null)

  useEffect(() => {
    // Check if the idTag not empty and the root is not already created
    if (idTag && !rootRef.current) {
      rootRef.current = createRoot(
        document.getElementById(idTag) as HTMLElement
      )
    }
  }, [idTag])

  // Expose function to render components using the existing root
  const render = (component: React.ReactNode) => {
    if (rootRef.current) {
      rootRef.current.render(component)
    }
  }

  return render
}

export default useSingleReactRoot
