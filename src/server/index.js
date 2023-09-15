import cors from 'cors'
import express from 'express'

import { convert } from './convert.js'
import { download } from './download.js'
import { summarize } from './summarize.js'
import { transcribe } from './transcribe.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/summary/:id', async (request, response) => {
  // https://youtube.com/shorts/TFGAMLL68CA?si=C5hNLnsmnC2DYIqv
  try {
    await download(request.params.id)
    const audioConverted = await convert()
    const result = await transcribe(audioConverted)

    return response.json({ result })
    // response.json({ result: 'Download do vídeo realizado com sucesso!' })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

app.post('/summary', async (request, response) => {
  try {
    const result = await summarize(request.body.text)

    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

app.listen(3333, () => console.log('Server is running on port 3333'))
