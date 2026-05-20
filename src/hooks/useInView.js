import { useEffect, useRef, useState } from 'react'

/**
 * useInView — returns [ref, isVisible].
 * Once the element enters the viewport it stays visible (one-shot).
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

/**
 * useAnimateChildren — observes a container and adds 'is-visible'
 * to all [data-anim] children when the container enters the viewport.
 * Children get staggered by their data-delay attribute (ms).
 */
export function useAnimateChildren(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          const children = container.querySelectorAll('[data-anim]')
          children.forEach((el) => {
            const delay = parseInt(el.getAttribute('data-delay') || '0', 10)
            setTimeout(() => el.classList.add('is-visible'), delay)
          })
        }
      },
      { threshold }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
