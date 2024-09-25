'use client'

import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const HeroBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls()
        hls.loadSource('https://ipfs.prometheus-platform.io/ipfs/QmPZYDwFWyBbMABxbbxUMnBxiMHRHj5kH2JxvJq5cau5Mr/playlist.m3u8')
        hls.attachMedia(videoRef.current)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current?.play()
        })
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = 'https://ipfs.prometheus-platform.io/ipfs/QmPZYDwFWyBbMABxbbxUMnBxiMHRHj5kH2JxvJq5cau5Mr/playlist.m3u8'
        videoRef.current.addEventListener('loadedmetadata', () => {
          videoRef.current?.play()
        })
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
      />
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  )
}

export default HeroBackground