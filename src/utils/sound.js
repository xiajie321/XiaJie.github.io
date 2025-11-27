// 简单的 8-bit 音效生成器
const AudioContext = window.AudioContext || window.webkitAudioContext
let audioCtx

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new AudioContext()
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

export const playSound = (type = 'click') => {
  try {
    const ctx = initAudio()
    const osc = ctx.createOscillator()
    const gainNode = ctx.createGain()

    osc.connect(gainNode)
    gainNode.connect(ctx.destination)

    if (type === 'click') {
      // 鼠标点击/悬停音效: 短促的高音
      osc.type = 'square'
      osc.frequency.setValueAtTime(800, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1)
      
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1)
      
      osc.start()
      osc.stop(ctx.currentTime + 0.1)
    } else if (type === 'start') {
      // 游戏开始音效: 上升音阶
      osc.type = 'square'
      osc.frequency.setValueAtTime(440, ctx.currentTime)
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1)
      
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.2)
      gainNode.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.4)
      
      osc.start()
      osc.stop(ctx.currentTime + 0.4)
    } else if (type === 'back') {
      // 返回音效
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(300, ctx.currentTime)
      osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.15)
      
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.15)
      
      osc.start()
      osc.stop(ctx.currentTime + 0.15)
    }
  } catch (e) {
    console.error('Audio play failed', e)
  }
}
