import { Database as DatabaseType } from "better-sqlite3"
import { Link } from './typings'

import Database from 'better-sqlite3'

class Db {
    private readonly db: DatabaseType;
    private readonly name: string;

    constructor(_dbName: string, _name: string) {
        this.db = new Database(_dbName)
        this.name = _name
    }
    CreateNew(): void {
        const _q = `CREATE TABLE IF NOT EXISTS ${this.name} (
            id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
            title VARCHAR(350),
            url VARCHAR(255),
            animated BOOLEAN NOT NULL 
        )`
        this.db.exec(_q)
    }
    InsertOne(_d: Link): void{
        const _title = (_d.title) ? _d.title : '  '
        const _animated = (_d.animated) ? 'TRUE' : 'FALSE'
        const _q = `INSERT INTO ${this.name} 
        (
            title,
            url,
            animated 
        )
        VALUES (
            '${_d.title}',
            '${_d.url}',
            ${_animated}
        )`
        this.db.prepare(_q).run()
    }
    GetAll(): Link[] {
        const _q = `SELECT * FROM ${this.name}`
        return this.db.prepare(_q).all()
    }
}

export { Db as Database }