import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Carousel from './three/Carousel'
import './style/styles.css'

export default function Members() {
  return (
    <div className="App">
      <video src='/videos/rizz.mp3' autoPlay loop muted/>
      <Canvas>
        <Suspense fallback={null}>
          <Carousel />
        </Suspense>
      </Canvas>
    </div>
  )
}
