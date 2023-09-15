import { Play } from '@phosphor-icons/react'
import { FormEvent, useState } from 'react'
import { server } from '../lib/server'

interface FormProps {
  onMessage: (txt: string) => void
}

export default function Form(props: FormProps) {
  const [url, setUrl] = useState('')

  async function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const minhaDiv = document.getElementById('content')

    minhaDiv?.classList.add('text-[#7c7c8a]')
    minhaDiv?.classList.add('select-none')

    if (url === '') return props.onMessage('Escolha um short para resumir.')

    if (!url.includes('shorts'))
      return props.onMessage('Este vídeo não parece ser um YouTube Shorts.')

    const [_, params] = url.split('/shorts/')
    const [videoID] = params.split('?')

    props.onMessage('Obtendo o texto do áudio...')

    const transcription = await server.get(`/summary/${videoID}`)

    props.onMessage('Realizando o resumo...')

    const summary = await server.post('/summary', {
      text: transcription.data.result,
    })

    props.onMessage(summary.data.result)

    if (
      minhaDiv?.classList.contains('text-[#7c7c8a]') &&
      minhaDiv?.classList.contains('select-none')
    ) {
      minhaDiv?.classList.remove('text-[#7c7c8a]')
      minhaDiv?.classList.remove('select-none')
    }
  }

  return (
    <form onSubmit={handleSubmitForm} id="form" className="mt-16 flex gap-3">
      <input
        type="url"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.currentTarget.value)}
        placeholder="URL do vídeo"
        className="h-12 w-[28.125rem] border-none text-white bg-[#202024] rounded-md py-0 px-3 text-base focus:outline-2 focus:outline focus:outline-[#8257e5] valid:bg-[#202024]"
      />

      <button
        title="Enviar URL"
        className="h-12 w-12 border-none rounded-md bg-[#8257e5] hover:cursor-pointer hover:bg-[#633BBC] transition-bgColor duration-[.2s]"
      >
        <Play className="text-2xl text-white m-auto " />
      </button>
    </form>
  )
}
