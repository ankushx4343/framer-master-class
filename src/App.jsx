import React from 'react'
import {motion} from 'motion/react';
const App = () => {
  return (
    <div className='text-4xl  h-screen'>
    <motion.div
    whileTap={{
      scale:0.7
    }}
    drag
    className='bg-amber-900 h-[300px] w-[300px] border-6 border-amber-100'>
    </motion.div>
    
    </div>
  )
}

export default App
