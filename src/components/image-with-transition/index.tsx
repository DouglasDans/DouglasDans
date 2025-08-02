'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import styles from './index.module.scss'

interface ImageWithTransitionProps extends Omit<ImageProps, 'onLoad'> {
  className?: string
}

export default function ImageWithTransition({ 
  className = '', 
  ...props 
}: ImageWithTransitionProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <Image
      {...props}
      className={`${className} ${styles.image} ${isLoaded ? styles.loaded : styles.loading}`}
      onLoad={handleLoad}
    />
  )
}
