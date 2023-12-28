import React from 'react'

function SomeChild(props: { showCount: () => void }) {

  return (
    <div onClick={() => props.showCount}>showCount</div>
  )
}

export default SomeChild