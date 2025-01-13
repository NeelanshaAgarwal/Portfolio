import React from 'react';
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('./models/react_logo.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[8,8,0]} scale={0.005} {...props} >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[1000, 7.935, 900]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 39.166]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('./models/react_logo.glb')

export default ReactLogo;