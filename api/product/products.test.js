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

        it('inserted product and brand_name', async ()=>{
            const product = await Products.insert(product1)//using insert function from products-model
            expect(product).toMatchObject({id:1,...product})
        })
    })

    describe('update function', ()=> {
        it('updates products', async ()=>{
            const [id] = await db('products').insert(product1)
            await Products.update(id, {makeup_type: 'Mascara'})
            const updated = await db('products').where({id}).first()
            expect(updated.makeup_type).toBe('Mascara')
        })
    })

})