const request = require('supertest')
const Products = require('./products-model')
const db = require('../../data/db-config')
const server = require('../server')

const product1 = {makeup_type: 'mascara', brand_name: 'Too Faced'}
const product2 = {makeup_type: 'eyeshadow', brand_name: 'Anastasia Beverly Hills'}

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async ()=>{
    await db('products').truncate()
})
afterAll(async ()=>{
    await db.destroy()
})
it('correct env var', ()=>{
    expect(process.env.DB_ENV).toBe("testing")
})

describe("Products Model", ()=> {
    describe('insert product', ()=>{
        it('add product to the db', async()=>{
            let product
            //1st product
            await Products.insert(product1)
            product = await db('products')
            expect(product).toHaveLength(1)

            //2nd product
            await Products.insert(product2)
            product = await db('products')
            expect(product).toHaveLength(2)
        })
    })
})