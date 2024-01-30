import React from 'react'
import { CopyTextBtn } from './copy-text-btn'

const initialShadow = {
  inset: false,
  horizontalOffset: 0,
  verticalOffset: 11,
  blurRadius: 16,
  spreadRadius: -3,
  color: '#c7c7c7',
  borderColor: '#c7c7c7'
}

const ShadowCalculator = () => {
  const [state, setState] = React.useState(initialShadow)

  const shandowGenerator = (data: any) => {
    const { horizontalOffset, verticalOffset, blurRadius, spreadRadius, color } = data
    const inset = state.inset ? 'inset' : ''
    const shadow = `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${color}`
    return `${inset} ${shadow}`
  }

  const getCode = () => {
    return `box-shadow: ${shandowGenerator(state)};\n\t-webkit-box-shadow: ${shandowGenerator(state)};\n\t-moz-box-shadow: ${shandowGenerator(state)};`
  }

  const handleReset = () => {
    setState(initialShadow)
  }


  return (
    <div className='grid lg:grid-cols-7 gap-8 border-t my-8 border-l-0 border-r-0'>

      <div className="rounded-lg lg:col-span-2 grid pt-6  text-primary-slate text-font--1 relative z-10">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center h-5">
            <input type="checkbox" onChange={e => setState({ ...state, inset: e.currentTarget.checked })}
              className="focus:ring-primary-yellow h-4 w-4 text-primary-yellow font-light text-font--1 mr-2" /> Inset </div>
          <button onClick={handleReset} className="text-primary-blue text-sm font-light">Reset</button>
        </div>

        <div className='grid gap-4'>
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

      <div className='my-8 py-8 col-span-5 relative'>

        <div className='flex gap-8 mb-8 items-center justify-center'>
          <div className='w-44 h-44 m-8 bg-white '
            style={{ boxShadow: shandowGenerator(state), border: `1px solid ${state.borderColor}` }} />
          <div className='w-44 h-44 m-8 rounded-full bg-white'
            style={{ boxShadow: shandowGenerator(state), border: `1px solid ${state.borderColor}` }} />
        </div>

        <div className='relative grid border-special-0 p-xs'>
          <CopyTextBtn text={getCode()} className='m-2 z-20'/>
          <pre className='flex flex-col relative '>
            <code className='select-all text-font--1 block font-light text-primary-slate/70'>
              {`box-shadow: ${shandowGenerator(state)};`}
              <br />
              {`-webkit-box-shadow: ${shandowGenerator(state)};`}
              <br />
              {`-moz-box-shadow: ${shandowGenerator(state)};`}
            </code>
          </pre>
        </div>
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
  const [value, setValue] = React.useState<number>(0)

  React.useEffect(() => {
    defaultValue && setValue(defaultValue)
  }, [defaultValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value
    setValue(value)
    onChange && onChange(value)
  }

  return (
    <div>
      <div className="flex justify-between items-center flex-wrap">
        <span className="text-font--1 font-light block">{label}</span>
        <div className="flex gap-1 items-center">
          <span className="w-20 flex gap-1 justify-end text-primary-slate text-sm border-special-1 rounded-md appearance-none py-1 px-2 text-right">
            {value}
            <span className='block '>px</span>
          </span>

        </div>
      </div>
      <div className="relative z-0 mb-8">
        <input type="range" list='list-range' value={value} max={100} onChange={handleChange} min={-100}
          className="focus:outline-none w-full bg-transparent text-font--1" />
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