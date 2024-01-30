import React from 'react'
import { FontSizeCalculator } from './FontSizeCalculator'
import { CopyTextBtn } from '../copy-text-btn'

const CalculatorFontSize = () => {

  const [values, setValues] = React.useState({
    min: {
      viewPort: 320,
      fontSize: 16,
      scale: 1.2
    },
    max: {
      viewPort: 1240,
      fontSize: 20,
      scale: 1.25
    },
  })

  const handleChangeMinViewport = (data: any) => {
    setValues({ ...values, min: { ...values.min, [data.name]: data.value } })
  }

  const handleChangeMaxViewport = (data: any) => {
    setValues({ ...values, max: { ...values.max, [data.name]: data.value } })
  }

  const calculFontSize = () => {
    const calculator = new FontSizeCalculator(
      values.min.viewPort,
      values.max.viewPort,
      values.min.fontSize,
      values.max.fontSize,
      values.min.scale,
      values.max.scale
    );

    return calculator.generateCSSRoot()
  }

  return (
    <div className='space-y-xs grid animate-flip-up-2 lg:grid-cols-5 grid-cols-1 rounded-md'>


      <div className="md:col-span-1 grid lg:grid-cols-1 grid-cols-2 place-content-start lg:gap-8 gap-xs py-xs">
        <GroupInput label='Minimum viewport' onChange={handleChangeMinViewport} values={
          {
            vport: values.min.viewPort,
            fontsize: values.min.fontSize
          }
        } />
        <GroupInput label='Maximum viewport' onChange={handleChangeMaxViewport} values={
          {
            vport: values.max.viewPort,
            fontsize: values.max.fontSize
          }
        } />
      </div>


      <div className="lg:col-span-4 border-special-0 ">
        <div className="overflow-x-auto py-xs custom-scroll relative border-primary-dark rounded-md ">
          <CopyTextBtn text={calculFontSize()}/>
          <pre className="text-font--2 select-all">
            {calculFontSize()}
          </pre>
        </div>
      </div>
    </div>
  )
}


type GroupInputProps = {
  label: string
  values: {
    vport: number,
    fontsize: number
  }
  onChange: (e: any) => void
}

type values = {
  name: string,
  value: number
}
const GroupInput = ({ label, values, onChange }: GroupInputProps) => {

  const scales = [1.067, 1.125, 1.2, 1.25, 1.333, 1.414, 1.5, 1.618, 1.667, 1.778, 1.875, 2];

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
    <div className="flex flex-col text-font--1">
      <label htmlFor='viewPort' className="text-font--1 mb-2 font-medium text-primary-slate">
        {label}
      </label>
      <div className="flex flex-col gap-2 text-font--2">

        <div className='flex border-special-1 items-stretch transition-all ease-linear duration-300 hover:border-primary-dark border-primary-dark/40 rounded-sm px-2 py-1 border'>
          <input name='viewPort' type="number" onChange={handleChangeVport} defaultValue={values.vport} className="w-full bg-transparent text-primary-dark outline-none text-font--1" />
          <span className="text-primary-dark/70 mx-1 block text-font--1">px</span>
        </div>

        <div className='flex border-special-1 items-stretch transition-all ease-linear duration-300 hover:border-primary-dark border-primary-dark/40 rounded-sm px-2 py-1 border'>
          <input name='fontSize' type="number" onChange={handleChange} defaultValue={values.fontsize} className="w-full bg-transparent text-primary-dark outline-none text-font--1" />
          <span className="text-primary-dark/70 mx-1 block text-font--1">px</span>
        </div>

        <div className='flex border-special-1 items-stretch transition-all ease-linear duration-300 hover:border-primary-dark border-primary-dark/40 rounded-sm px-2 py-1 border'>
          <select onChange={handleChangeScale} name='scale' className="bg-transparent w-full text-primary-dark outline-none text-font--1" >
            {scales.map(scale => <option className='text-font--1' key={scale} value={scale}>{scale}</option>)}
          </select>
          <span className="text-primary-dark/70 mx-1 block text-font--1">px</span>
        </div>

      </div>
    </div>
  )
}

export default CalculatorFontSize
