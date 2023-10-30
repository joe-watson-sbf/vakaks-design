import React from 'react'

interface PaddingGeneratorProps {
  unit1: number;
  unit2: number;
  unit3: number;
}
export const PaddingGenerator = () => {
  const [state, setState] = React.useState<PaddingGeneratorProps>({
    unit1: 0,
    unit2: 0,
    unit3: 0,
  })
  
  return (
    <div>

    </div>
  )
}
