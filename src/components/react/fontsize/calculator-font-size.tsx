import React from 'react'

const CalculatorFontSize = () => {

  const [values, setValues] = React.useState({
    min: {
      viewport: 320,
      fontSize: 16,
      scale: 1.2
    },
    max: {
      viewport: 1240,
      fontSize: 20,
      scale: 1.25
    },
  })

  return (
    <>
      <div className="bg-primary-slate sm:py-8 py-4 md:col-span-1 flex flex-col h-full">
        <div>
          <GroupInput label='Minimum viewport' onChange={e => console.log(e)} values={
            {
              vport: values.min.viewport,
              fontsize: values.min.fontSize
            }
          } />
          <div className="h-8"></div>
          <GroupInput label='Maximum viewport' onChange={e => console.log(e)} values={
            {
              vport: values.max.viewport,
              fontsize: values.max.fontSize
            }
          } />
        </div>
      </div>
    </>
  )
}


type GroupInputProps = {
  label: string
  values: {
    vport: number,
    fontsize: number
  }
  onChange: (e:any)=>void
}

type values = {
  name: string,
  value: number
}
const GroupInput = ({ label, values, onChange }: GroupInputProps) => {

  const scales = [ 1.067, 1.125, 1.2, 1.25, 1.333, 1.414, 1.5, 1.618, 1.667, 1.778, 1.875, 2 ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    onChange({ name, value: +value } as values)
  }

  const handleChangeVport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    onChange({ name, value: +value } as values)
  }

  const handleChangeScale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    onChange({ name, value: +value } as values)
  }

  return (
    <div className="flex flex-col px-4">
      <label className="text-font--2 mb-2 font-normal text-primary-yellow">
        {label}
      </label>
      <div className="flex flex-col gap-2 text-font--2">

        <div className='flex items-stretch transition-all ease-linear duration-300 hover:border-primary-light border-gray-100/30 rounded-sm px-2 py-1 border'>
          <input name='viewPort' type="number" onChange={handleChangeVport} defaultValue={values.vport} className="w-full bg-transparent text-primary-light outline-none " />
          <span className="text-primary-light/70 mx-1 block">px</span>
        </div>

        <div className='flex items-stretch transition-all ease-linear duration-300 hover:border-primary-light border-gray-100/30 rounded-sm px-2 py-1 border'>
          <input name='fontSize' type="number" onChange={handleChange} defaultValue={values.fontsize} className="w-full bg-transparent text-primary-light outline-none " />
          <span className="text-primary-light/70 mx-1 block">px</span>
        </div>

        <div className='flex items-stretch transition-all ease-linear duration-300 hover:border-primary-light border-gray-100/30 rounded-sm px-2 py-1 border'>
          <select onChange={handleChangeScale} name='scale' className="bg-transparent w-full text-primary-light outline-none " >
            {scales.map(scale => <option key={scale} value={scale}>{scale}</option>)}
          </select>
          <span className="text-primary-light/70 mx-1 block">px</span>
        </div>

      </div>
    </div>
  )
}

export default CalculatorFontSize
