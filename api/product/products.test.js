const request = require('supertest')
const db = require('../../data/db-config')
const server = require('../server')

const product1 = {makeup_type: 'foundation', brand_name: 'Revlon'}
const product2 = {makeup_type: 'primer', brand_name: 'Elf'}

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

it('correct env var', ()=>{
    expect(process.env.DB_ENV).toBe("testing")
})