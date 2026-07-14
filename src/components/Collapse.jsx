import { useState, useRef, useEffect } from 'react'
import styles from './Collapse.module.css'

function Collapse({ title, content, maxHeight, setMaxHeight }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)
  useEffect(() => {
    if (contentRef.current && setMaxHeight) {
      setMaxHeight(contentRef.current.scrollHeight)
    }
  }, [content])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.collapse}>
      <button className={styles.button} onClick={handleClick}>
        {title}
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>∨</span>
      </button>

      <div
        className={styles.content}
        style={{ 
          maxHeight: isOpen
            ? `${maxHeight || contentRef.current?.scrollHeight}px`
            : '0',
          height: maxHeight ? `${maxHeight}px` : 'auto'
        }}
        ref={contentRef}
      >
        <div className={styles.inner}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Collapse
