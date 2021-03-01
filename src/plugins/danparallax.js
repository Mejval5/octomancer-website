
import * as noise from '@/plugins/perlin.js'

export default function () {
  return {
    name: 'DanParallax',

    methods: {
      debug: false,
      stop: false,
      pause: false,
      async run (desktop) {
        var i
        var id
        var listBg = []
        for (i = 1; i <= 22; i++) {
          id = 'bg' + i
          listBg[i] = document.getElementById(id)
          listBg[i].className += ' mybg'
          if (desktop) {
            listBg[i].className += ' willMove'
          }
        }
        var amountX
        var amountY
        var k
        var _i
        var defR = 300
        var r
        var angle
        var parallaxAmount = 500
        var perlinNoise
        var perlinNoiseR
        var sleepTime

        for (k = 100000; k <= 200000000; k++) {
          if (this.stop) {
            return
          }
          if (this.pause || !desktop) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            k -= 1
            continue
          }
          perlinNoise = noise.noise.perlin2(k / Math.PI, k / Math.PI)
          perlinNoiseR = noise.noise.perlin2(k / Math.PI, k / Math.PI)
          if (this.debug) {
            console.log(perlinNoise)
          }
          angle = (k * 5 % 2 * Math.PI) + perlinNoise * Math.PI * 2
          r = perlinNoiseR * defR
          sleepTime = (Math.random() * 6 + 3) * 1000
          await new Promise(resolve => setTimeout(resolve, sleepTime))
          for (i = 1; i <= 22; i++) {
            if (i >= 20 && i <= 22) {
              _i = 20
            } else if (i === 23) {
              _i = 18
            } else {
              _i = i
            }

            amountX = Math.round(Math.cos(angle) * r * _i * _i / parallaxAmount)
            amountY = Math.round(Math.sin(angle) * r * _i * _i / parallaxAmount)
            listBg[i].style.transform = `translate(${amountX}px, ${amountY}px)`
          }
        }
      },
      is_running () {
        console.log(this)
        return this.running
      },
    },
  }
}
