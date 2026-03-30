'use client'

import React, { useEffect, useRef } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────
interface Stage {
  x: number
  y: number
  label: string
}

// ─── Constants ────────────────────────────────────────────────────────────────
const ORANGE = '#FD5A07'
const BG     = '#100702'

// Canvas node positions — Z shape spread across full canvas
const STAGES: Stage[] = [
  { x: 0.18, y: 0.20, label: 'STRATEGY' },
  { x: 0.88, y: 0.20, label: 'SYSTEM'   },
  { x: 0.53, y: 0.50, label: 'BRANDING' },
  { x: 0.18, y: 0.80, label: 'TEAM'     },
  { x: 0.88, y: 0.80, label: 'REVENUE'  },
]

const PATH = [0, 1, 2, 3, 4]

interface ZCanvasProps {
  onStageChange?: (i: number) => void
}

const ZCanvas = ({ onStageChange }: ZCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const iconImg = new Image()
    iconImg.src = '/zanimationIcon.png'

    let animId: number
    let W = 0, H = 0, frame = 0, activeStage = 0, particleT = 0

    const sx = (i: number) => STAGES[i].x * W
    const sy = (i: number) => STAGES[i].y * H

    function segLen(a: number, b: number) {
      return Math.hypot(sx(b) - sx(a), sy(b) - sy(a))
    }
    function totalLen() {
      let t = 0
      for (let i = 0; i < PATH.length - 1; i++) t += segLen(PATH[i], PATH[i + 1])
      return t
    }
    function ptAtT(t: number) {
      const tl = totalLen(), d = t * tl
      let acc = 0
      for (let i = 0; i < PATH.length - 1; i++) {
        const sl = segLen(PATH[i], PATH[i + 1])
        if (acc + sl >= d) {
          const f = (d - acc) / sl
          return {
            x: sx(PATH[i]) + (sx(PATH[i + 1]) - sx(PATH[i])) * f,
            y: sy(PATH[i]) + (sy(PATH[i + 1]) - sy(PATH[i])) * f,
          }
        }
        acc += sl
      }
      return { x: sx(PATH[PATH.length - 1]), y: sy(PATH[PATH.length - 1]) }
    }
    function stageAtT(t: number): number {
      const tl = totalLen()
      let acc = 0
      const thresh = [0]
      for (let i = 0; i < PATH.length - 1; i++) {
        thresh.push((acc + segLen(PATH[i], PATH[i + 1])) / tl)
        acc += segLen(PATH[i], PATH[i + 1])
      }
      for (let i = thresh.length - 1; i >= 0; i--) {
        if (t >= thresh[i] - 0.01) return i
      }
      return 0
    }
    function angleAtT(t: number): number {
      const dt = 0.005
      const p1 = ptAtT(Math.max(0, t - dt))
      const p2 = ptAtT(Math.min(1, t + dt))
      return Math.atan2(p2.y - p1.y, p2.x - p1.x)
    }

    function resize() {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width  = W * devicePixelRatio
      canvas.height = H * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    function draw() {
      frame++
      ctx.clearRect(0, 0, W, H)

      // Dashed guide path
      ctx.strokeStyle = 'rgba(207,207,207,0.13)'
      ctx.lineWidth   = 1.5
      ctx.setLineDash([6, 6])
      ctx.beginPath()
      ctx.moveTo(sx(0), sy(0))
      for (let i = 1; i < PATH.length; i++) ctx.lineTo(sx(PATH[i]), sy(PATH[i]))
      ctx.stroke()
      ctx.setLineDash([])

      // Completed orange path
      const tl = totalLen(), drawn = particleT * tl
      let acc2 = 0
      ctx.strokeStyle = ORANGE
      ctx.lineWidth   = 2.5
      ctx.globalAlpha = 0.95
      ctx.shadowColor = ORANGE
      ctx.shadowBlur  = 8
      ctx.beginPath()
      ctx.moveTo(sx(0), sy(0))
      for (let i = 0; i < PATH.length - 1; i++) {
        const sl = segLen(PATH[i], PATH[i + 1])
        if (acc2 + sl <= drawn) {
          ctx.lineTo(sx(PATH[i + 1]), sy(PATH[i + 1]))
        } else if (acc2 < drawn) {
          const f = (drawn - acc2) / sl
          ctx.lineTo(
            sx(PATH[i]) + (sx(PATH[i + 1]) - sx(PATH[i])) * f,
            sy(PATH[i]) + (sy(PATH[i + 1]) - sy(PATH[i])) * f,
          )
          break
        }
        acc2 += sl
      }
      ctx.stroke()
      ctx.shadowBlur  = 0
      ctx.globalAlpha = 1

      // Stage nodes
      STAGES.forEach((s, i) => {
        const x = s.x * W, y = s.y * H
        const isActive = i === activeStage
        const isDone   = i < activeStage
        const r        = isDone ? 24 : isActive ? 28 : 20
        const pulse    = Math.sin(frame * 0.04) * 3

        if (isActive) {
          ctx.beginPath()
          ctx.arc(x, y, r + 9 + pulse, 0, Math.PI * 2)
          ctx.strokeStyle = 'rgba(253,90,7,0.18)'
          ctx.lineWidth = 1; ctx.stroke()
          ctx.beginPath()
          ctx.arc(x, y, r + 20 + pulse * 1.4, 0, Math.PI * 2)
          ctx.strokeStyle = 'rgba(253,90,7,0.07)'
          ctx.lineWidth = 1; ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        if (isActive) {
          ctx.fillStyle = 'rgba(16,7,2,0.97)'; ctx.fill()
          ctx.shadowColor = ORANGE; ctx.shadowBlur = 22
          ctx.strokeStyle = ORANGE; ctx.lineWidth = 2.5; ctx.stroke()
          ctx.shadowBlur = 0
        } else if (isDone) {
          ctx.fillStyle = 'rgba(16,7,2,0.97)'; ctx.fill()
          ctx.strokeStyle = ORANGE; ctx.lineWidth = 1.5; ctx.stroke()
        } else {
          ctx.fillStyle = 'rgba(16,7,2,0.85)'; ctx.fill()
          ctx.strokeStyle = '#3a3020'; ctx.lineWidth = 1; ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(x, y, isActive ? 7 : 4, 0, Math.PI * 2)
        ctx.fillStyle = isDone || isActive ? ORANGE : '#443322'
        if (isActive) { ctx.shadowColor = ORANGE; ctx.shadowBlur = 14 }
        ctx.fill()
        ctx.shadowBlur = 0

        ctx.font      = "600 11px 'Barlow', sans-serif"
        ctx.textAlign = 'center'
        ctx.fillStyle = isDone || isActive ? ORANGE : 'rgba(207,207,207,0.4)'
        ctx.fillText(s.label, x, y + r + 16)
      })

      // Rocket particle
      if (particleT > 0 && particleT < 1) {
        const pt    = ptAtT(particleT)
        const angle = angleAtT(particleT)

        for (let i = 1; i <= 6; i++) {
          const pt2 = ptAtT(Math.max(0, particleT - i * 0.013))
          ctx.beginPath()
          ctx.arc(pt2.x, pt2.y, 4.5 - i * 0.6, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(253,90,7,${0.55 - i * 0.08})`
          ctx.fill()
        }

        ctx.save()
        ctx.translate(pt.x, pt.y)
        ctx.rotate(angle)
        ctx.shadowColor = ORANGE; ctx.shadowBlur = 20

        // Use the imported icon image instead of manual drawing
        const iconSize = 28
        if (iconImg.complete) {
          ctx.drawImage(iconImg, -iconSize / 2, -iconSize / 2, iconSize, iconSize)
        } else {
          // Fallback if image isn't loaded yet
          ctx.beginPath()
          ctx.moveTo(15, 0); ctx.lineTo(-10, -7); ctx.lineTo(-6, 0); ctx.lineTo(-10, 7)
          ctx.closePath(); ctx.fillStyle = ORANGE; ctx.fill()
        }

        ctx.shadowBlur = 0
        ctx.restore()
      }

      particleT += 0.0014
      if (particleT > 1.06) particleT = 0

      const ns = stageAtT(Math.min(1, particleT))
      if (ns !== activeStage) {
        activeStage = ns
        onStageChange?.(ns)
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [onStageChange])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  )
}

export default ZCanvas
