import { Play } from '@phosphor-icons/react'

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <img src="/logo.svg" alt="Logo" />

      <h1 className="text-[#996DFF] -mt-1 text-[2rem] font-bold">
        Shorts Summary
      </h1>

      <form id="form" className="mt-16 flex gap-3">
        <input
          type="url"
          id="url"
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

      <h2 className="font-bold text-2xl self-start mt-16">Resumo</h2>
      <p
        id="content"
        className="self-start text-justify w-[32rem] text-[#7c7c8a] -mt-1 select-none"
      >
        Escolha um short para resumir
      </p>
    </div>
  )
}
