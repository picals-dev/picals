'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export type BgSliderProps = {
  images: readonly string[]
  intervalMs?: number
  transitionMs?: number
  autoplay?: boolean
  loop?: boolean
  blockPointerEvents?: boolean
  priorityFirst?: boolean
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function useVisibilityPause(onVisibleChange: (visible: boolean) => void) {
  useEffect(() => {
    const handler = () =>
      onVisibleChange(document.visibilityState === 'visible')
    document.addEventListener('visibilitychange', handler)
    return () => document.removeEventListener('visibilitychange', handler)
  }, [onVisibleChange])
}

export default function LoginBgSlide({
  images,
  intervalMs = 5000,
  transitionMs = 600,
  autoplay = true,
  loop = true,
  blockPointerEvents = true,
  priorityFirst = true,
}: BgSliderProps) {
  const count = images.length
  const reducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)
  const playingRef = useRef<boolean>(autoplay && !reducedMotion && count > 1)

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const next = useCallback(() => {
    setIndex((prev) => {
      const nextIndex = prev + 1
      if (nextIndex < count) return nextIndex
      return loop ? 0 : prev // 到尾部：循环回到 0；若不循环，停在末尾
    })
  }, [count, loop])

  // 自动播放：visibility hidden 时暂停，返回时恢复
  const setupAutoplay = useCallback(() => {
    clearTimer()
    if (!playingRef.current) return
    timerRef.current = window.setInterval(
      next,
      Math.max(transitionMs + 50, intervalMs),
    )
  }, [clearTimer, next, intervalMs, transitionMs])

  useEffect(() => {
    playingRef.current = autoplay && !reducedMotion && count > 1
    setupAutoplay()
    return clearTimer
  }, [autoplay, reducedMotion, count, setupAutoplay, clearTimer])

  useVisibilityPause((visible) => {
    playingRef.current = visible && autoplay && !reducedMotion && count > 1
    setupAutoplay()
  })

  // 轨道位移样式（百分比，不依赖屏幕像素）
  const trackStyle = useMemo<React.CSSProperties>(
    () => ({
      width: `${count * 100}%`,
      transform: `translate3d(-${index * (100 / count)}%, 0, 0)`,
      transition: reducedMotion
        ? undefined
        : `transform ${transitionMs}ms ease`,
    }),
    [count, index, transitionMs, reducedMotion],
  )

  const slideClass = 'relative h-dvh w-dvw shrink-0' // 每页固定 100vw/100vh

  return (
    <div
      className={[
        'fixed inset-0 overflow-hidden', // 作为背景
        blockPointerEvents ? 'pointer-events-none' : '',
      ].join(' ')}
      aria-hidden
    >
      <div
        className="relative top-0 flex h-full will-change-transform"
        style={trackStyle}
      >
        {images.map((src, i) => (
          <div key={src + i} className={slideClass}>
            <Image
              src={src}
              alt="" // 纯背景装饰，留空 alt
              fill
              priority={priorityFirst && i === 0}
              sizes="100vw"
              // 如果使用远程图片并且没有 blurDataURL，可移除此项
              // placeholder="blur"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
