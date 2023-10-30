import React from 'react'

const CalculatorFontSize = () => {

  return (
    <>
      <div className="bg-primary-slate sm:py-8 py-4 md:col-span-1 flex flex-col items-center h-full justify-center">
        <div>
          <GroupInput label='Minimum viewport' onChange={e => console.log(e)} values={
            {
              vport: 320,
              fontsize: 16
            }
          } />
          <div className="h-8"></div>
          <GroupInput label='Minimum viewport' onChange={e => console.log(e)} values={
            {
              vport: 1240,
              fontsize: 20
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const GroupInput = ({ label, values, onChange }: GroupInputProps) => {

  const scales = [1.067, 1.125, 1.2, 1.25, 1.333,
    1.414, 1.5, 1.618, 1.667, 1.778, 1.875, 2];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }
  return (
    <div className="flex flex-col px-4">
      <label className="text-font--2 mb-2 font-normal text-primary-yellow">
        {label}
      </label>
      <div className="flex flex-col gap-2">
        <div className='flex items-stretch transition-all ease-linear duration-300 hover:border-primary-light border-gray-100/30 rounded-sm px-2 py-1 border'>
          <input type="number" defaultValue={values.vport} className="w-full text-font-0 bg-transparent text-primary-light outline-none " />
          <span className="text-gray-100/70 mx-1 block">px</span>
        </div>
        <div className='flex items-stretch transition-all ease-linear duration-300 hover:border-primary-light border-gray-100/30 rounded-sm px-2 py-1 border'>
          <input type="number" defaultValue={values.fontsize} className="w-full text-font-0 bg-transparent text-primary-light outline-none " />
          <span className="text-gray-100/70 mx-1 block">px</span>
        </div>
        <div className='flex items-stretch transition-all ease-linear duration-300 hover:border-primary-light border-gray-100/30 rounded-sm px-2 py-1 border'>

          <select className="bg-transparent w-full text-primary-light text-font-0 outline-none " >
            {scales.map(scale => <option key={scale} value={scale}>{scale}</option>)}
          </select>
          <span className="text-gray-100/70 mx-1 block">px</span>
        </div>
      </div>
    </div>
  )
}

export default CalculatorFontSize
