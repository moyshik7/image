import { Database } from './db'

const db = new Database('./db/test.db', 'test')

db.CreateNew()
/*db.InsertOne({
    title: 'poppin',
    url: 'https://i.imgur.com/srjyh7d.png',
    animated: false
})*/
//console.log(db.GetAll())
console.log(db.GetRandom())