import { useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { BufferAttribute, BufferGeometry, Vector3 } from 'three'
import Dashboard from '@/components/dashboard'
import Card from '@/components/Card'
import NodesSection from '@/components/NodeSection'
import Navbar from '@/components/Navbar'

function Box({ position, color }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function Wire({ points, color }) {
  const vertices = new Float32Array(points.flat())
  const geometry = new BufferGeometry().setAttribute('position', new BufferAttribute(vertices, 3))
  return (
    <line geometry={geometry}>
      <lineBasicMaterial attach="material" color={color} />
    </line>
  )
}

function Scene({ scrollPosition }) {
  const nodes = [
    [0, 0, 0],
    [0, -3, -3],
    [0, -6, -6],
  ]
  const { camera } = useThree()
  const [lightPosition, setLightPosition] = useState(nodes[0])

  useEffect(() => {
    const totalScrollHeight = document.body.scrollHeight - window.innerHeight
    const scrollPercent = scrollPosition / totalScrollHeight

    if (scrollPercent <= 0.5) {
      const node1ToNode2Percent = scrollPercent / 0.5
      setLightPosition([
        nodes[0][0] * (1 - node1ToNode2Percent) + nodes[1][0] * node1ToNode2Percent,
        nodes[0][1] * (1 - node1ToNode2Percent) + nodes[1][1] * node1ToNode2Percent,
        nodes[0][2] * (1 - node1ToNode2Percent) + nodes[1][2] * node1ToNode2Percent
      ])
    } else {
      const node2ToNode3Percent = (scrollPercent - 0.5) / 0.5
      setLightPosition([
        nodes[1][0] * (1 - node2ToNode3Percent) + nodes[2][0] * node2ToNode3Percent,
        nodes[1][1] * (1 - node2ToNode3Percent) + nodes[2][1] * node2ToNode3Percent,
        nodes[1][2] * (1 - node2ToNode3Percent) + nodes[2][2] * node2ToNode3Percent
      ])
    }
    camera.position.z = scrollPercent * 6
  }, [scrollPosition])

  return (
    <>
      <ambientLight intensity={0.5} />
      <Wire points={nodes.slice(0, 2)} color='blue' />
      <Wire points={nodes.slice(1)} color='red' />
      <Box position={nodes[0]} color='blue' />
      <Box position={nodes[1]} color='red' />
      <Box position={nodes[2]} color='green' />
      <Box position={lightPosition} color='yellow' />
      <pointLight position={lightPosition} color='yellow' />
    </>
  )
}

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      setScrollPosition(scrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // style={{ height: '300vh' }}
    <div >
      {/* <Canvas style={{ height: '100vh', position: 'fixed', top: 0 }}>
        <Scene scrollPosition={scrollPosition} />
      </Canvas> */}
      <div className='sticky top-0 z-10'>
       <Navbar />
      </div>
     
      <Dashboard />
      <div className="grid grid-cols-3 gap-4 p-4"> 
        <Card />
        <Card />
        <Card />
      </div>
      <NodesSection />
    </div>
  )
}
