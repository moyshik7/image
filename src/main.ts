import { Database } from './db'

const db = new Database('./db/test.db', 'test')

db.CreateNew()
db.InsertOne({
    title: 'hoppin',
    url: 'https://i.imgur.com/dC0zBfq.jpg',
    animated: false
})