import React from 'react'

const ShadowCalculator = () => {
  const [state, setState] = React.useState({
    inset: false,
    horizontalOffset: 0,
    verticalOffset: 11,
    blurRadius: 16,
    spreadRadius: -3,
    color: '#c7c7c7',
    borderColor: '#c7c7c7'
  })

  const shandowGenerator = (data: any) => {
    // box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1); default
    const { horizontalOffset, verticalOffset, blurRadius, spreadRadius, color } = data
    const inset = state.inset ? 'inset' : ''
    const shadow = `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${color}`
    return `${inset} ${shadow}`
  }

  const handleCopy = () => {
    // --webkit-box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    // --moz-box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    // create a variable for the color value
    const text = `box-shadow: ${shandowGenerator(state)};\n\t-webkit-box-shadow: ${shandowGenerator(state)};\n\t-moz-box-shadow: ${shandowGenerator(state)};\n\tborder: 1px solid ${state.borderColor};`

    navigator.clipboard.writeText(text)
  }


  return (
    <div>
      <div className="px-4 bg-primary-slate shadow-inner rounded-lg pt-6 border border-l-0 border-r-0 text-primary-yellow/80">
        <div className='flex items-center sm:gap-8 gap-4 border-b border-white pb-8 mb-8 container md:mx-auto '>
          <div className="flex items-center mb-4">
            <label className="flex items-center h-5">
              <input type="checkbox" onChange={
                e => setState({ ...state, inset: e.currentTarget.checked })
              } className="focus:ring-primary-yellow h-4 w-4 text-primary-yellow text-font--2 font-light rounded mr-2" /> Inset </label>
            <button className="ml-auto text-sm bg-red-600 focus:outline-none focus:ring-red-600 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-4 text-white hover:bg-red-700 py-1 px-3 rounded"> Remove </button>
          </div>

          <div className='flex items-center gap-3'>
            <label className="block text-font--2 font-light mb-1" htmlFor="color" data-v-3b5b05cb>Shadow color: </label>
            <input type='color' value={state.color} onChange={e => setState({ ...state, color: e.currentTarget.value })}
              className="shadow-sm outline-none h-8 block w-48" />
          </div>
          <div className='flex items-center gap-3'>
            <label className="block text-font--2 font-light mb-1" htmlFor="color" data-v-3b5b05cb>Border color: </label>
            <input type='color' value={state.color} onChange={e => setState({ ...state, borderColor: e.currentTarget.value })}
              className="shadow-sm outline-none h-8 block w-48" />
          </div>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4'>
          <InputGroup label='Horizontal offset'
            defaultValue={state.horizontalOffset}
            onChange={value => setState({ ...state, horizontalOffset: value })} />

          <InputGroup label='Vertical offset' defaultValue={state.verticalOffset}
            onChange={value => setState({ ...state, verticalOffset: value })} />

          <InputGroup label='Blur radius' defaultValue={state.blurRadius}
            onChange={value => setState({ ...state, blurRadius: value })} />

          <InputGroup label='Spread radius' defaultValue={state.spreadRadius}
            onChange={value => setState({ ...state, spreadRadius: value })} />
        </div>
      </div>

      <div className='my-4'>
        <pre className='flex flex-col bg-primary-light rounded-sm p-4 sm:w-3/4 border-2 border-slate-700'>
          <code className='select-all text-font-0 block font-light text-primary-slate/70' onClick={handleCopy}>
            {`box-shadow: ${shandowGenerator(state)};`}
            <br/>
            {`-webkit-box-shadow: ${shandowGenerator(state)};`}
            <br/>
            {`-moz-box-shadow: ${shandowGenerator(state)};`}
            <br/>
            {`border: 1px solid ${state.borderColor}`}
          </code>
        </pre>
      </div>
      <div className=' py-16 flex gap-8 items-center justify-center'>
        <div className='w-56 h-56 m-16 bg-white ' 
          style={{ boxShadow: shandowGenerator(state), border: `1px solid ${state.borderColor}` }} />
        <div className='w-56 h-56 m-16 rounded-full bg-white' 
          style={{ boxShadow: shandowGenerator(state), border: `1px solid ${state.borderColor}` }} />
      </div>
    </div>

  )
}

type InputGroupProps = {
  label?: string
  defaultValue?: number
  onChange?: (value: number) => void
}
const InputGroup = ({ label, onChange, defaultValue }: InputGroupProps) => {
  const [value, setValue] = React.useState<number>(
    defaultValue || 0
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value
    setValue(value)
    onChange && onChange(value)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2 flex-wrap">
        <label className="text-font--2 font-light block">{label}</label>
        <div className="flex gap-1 items-center">
          <span className="w-20 flex gap-1 justify-end text-primary-light text-sm border border-primary-light/30 rounded-md appearance-none py-1 px-2 text-right">
            {value}
            <span className='block'>px</span>
          </span>

        </div>
      </div>
      <div className="relative z-0 mb-8">
        <input type="range" list='list-range' value={value} max={100} onChange={handleChange} min={-100}
          className="focus:outline-none w-full bg-transparent" />
        <datalist id='list-range'>
          {
            Array.from({ length: 100 }, (_, i) => i - 100).map((i) => (
              <option key={i} value={i} />
            ))
          }
        </datalist>
      </div>

    </div>
  )
}

export default ShadowCalculator