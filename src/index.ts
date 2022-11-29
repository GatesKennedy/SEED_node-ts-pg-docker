import express, { Request, Response } from 'express'
import db from './db'

const PORT = process.env.PORT || 3001

//	App
const app = express()
app.get('/', (request: Request, response: Response) => {
	response.send('Sup, Chunks?');
})

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
	db.runMigrations()
})