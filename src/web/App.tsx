import { useState } from 'react'
import Form from './components/Form'

export default function App() {
  const [message, setMessage] = useState('')

  return (
    <div className="flex flex-col items-center">
      <img src="/logo.svg" alt="Logo" />

      <h1 className="text-[#996DFF] -mt-1 text-[2rem] font-bold">
        Shorts Summary
      </h1>

      <Form onMessage={setMessage} />

      <h2 className="font-bold text-2xl self-start mt-16 mb-4">Resumo</h2>
      <p
        id="content"
        className="self-start text-justify w-[32rem] -mt-1 text-[#7c7c8a] select-none"
      >
        {message === '' ? 'Escolha um short para resumir.' : message}
      </p>
    </div>
  )
}
