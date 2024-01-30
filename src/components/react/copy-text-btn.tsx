import React from 'react'

type CopyTextBtnProps = {
  text: string
  className?: string
}
export const CopyTextBtn = ({text, className}: CopyTextBtnProps) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }


  return (
    <button onClick={handleCopy} className={"absolute top-2 right-2 bg-primary-dark text-white rounded-md px-2 py-1 text-xs " +className}>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
