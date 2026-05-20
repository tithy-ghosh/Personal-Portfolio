import { useEffect, useState, useRef } from 'react'

const MinimalCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('interactive') ||
        target.closest('a') ||
        target.closest('button') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'

      setIsHovering(!!isInteractive)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Update cursor position
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mousePos.x}px`
      cursorRef.current.style.top = `${mousePos.y}px`
    }
  }, [mousePos])

  return (
    <>
      <style>{`
        * {
          cursor: none;
        }

        button, a, input, textarea, [role="button"] {
          cursor: none;
        }

        @keyframes cursorGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7),
                        inset 0 0 0 1px rgba(139, 92, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(139, 92, 246, 0),
                        inset 0 0 0 1px rgba(139, 92, 246, 0.8);
          }
        }

        @keyframes cursorHoverExpand {
          0% {
            width: 24px;
            height: 24px;
          }
          100% {
            width: 40px;
            height: 40px;
          }
        }

        @keyframes cursorRotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .cursor-minimal {
          position: fixed;
          width: 24px;
          height: 24px;
          border: 2px solid #8B5CF6;
          border-radius: 2px;
          pointer-events: none;
          z-index: 9999;
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 0.2s ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7),
                      inset 0 0 0 1px rgba(139, 92, 246, 0.5);
          animation: ${isHovering ? 'cursorHoverExpand' : 'cursorGlow'} ${isHovering ? '0.3s ease-out forwards' : '2s ease-in-out infinite'};
        }

        .cursor-minimal::before {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(135deg, #8B5CF6, #06B6D4);
          border-radius: 50%;
        }

        .cursor-minimal::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 2px;
          animation: ${isHovering ? 'cursorRotate 1s linear infinite' : 'none'};
        }
      `}</style>

      <div
        ref={cursorRef}
        className="cursor-minimal"
      />
    </>
  )
}

export default MinimalCursor