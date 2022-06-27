

describe("Create retail", () => {
    it("Create group", async () => {
        //await browser.url("https://admin.eda.tst.yandex-team.ru/login")
        await browser.url("https://admin.eda.tst.yandex-team.ru/place_groups/add")
        await $('#username').setValue('admin@yandex-team.ru')
        await $('#password').setValue('password')
        await $('button[name=_submit]').click()


        //browser.url("https://admin.eda.tst.yandex-team.ru/place_groups/add")
        
        await $('#place_group_name').setValue('test-name')
        await $('#place_group_organizationId').setValue('1')
        await $('#place_group_organizationId').setValue('1')




        await browser.pause(10000)
       
    })
})