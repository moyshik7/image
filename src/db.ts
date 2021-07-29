import { Database as DB } from "better-sqlite3"

export class Database {
    private readonly db: DB;
    private readonly name: string;

    constructor(_dbName: string) {
        this.db = new DB(_dbName)
        this.name = _dbName
    }
    CreateNew(_table: string): void {
        if(!_table){ return }
        const _q = `CREATE TABLE IF NOT EXISTS ${_table} (
            id SERIAL PRIMARY KEY UNIQUE,
            title VARCHAR(350),
            url VARCHAR(255),
            animated BOOLEAN NOT NULL 
        )`
        this.db.exec(_q).then(console.log).catch(console.error)
    }
    GetRandom(){
        
    }
}
//dhxhfjfjfjfkfjfjfjfjfjfjdjfjckgkfjdjfjfjdhdjdjdjdjdjdjfjfjdjdjfjdjdjdjsudufjdjdjdudjdjdjdjdjxjdjdjdjfjdjdudhdjxjdjfjcjcjcjcjckfjckcjcjxjcjcjcjcjfjckckc