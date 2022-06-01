const { expect } = require('chai');
const quidax = require("./quidax_object");

describe("Users Collections", () => {
    let users

    it("list all users", async () => {
        try {
            const data = await quidax.users.getAllSubAccounts();
            users = data.data
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('array')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("create new user details", async () => {
        try {
            const data = await quidax.users.create({
                "email": "lekan@quidax.com",
                "first_name": "oye",
                "last_name": "olalekan",
                "phone_number": "08087307896"
            });
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("get user details", async () => {
        try {
            const data = await quidax.users.getAccountDetails(users[0].id);
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })

    it("edit user detail", async () => {
        try {
            const data = await quidax.users.editAccount(users[0].id, { "first_name": "olalekan", "last_name": "ogunded" },);
            expect(data).to.be.an('object')
            expect(data.status).to.equal("success")
            expect(data.data).to.be.an('object')
        } catch (e) {
            expect(e.status).to.equal("error");
        }
    })
})