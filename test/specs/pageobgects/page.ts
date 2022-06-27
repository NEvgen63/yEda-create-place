module.exports = class Page {
  
    open (path) {
        return browser.url(`https://admin.eda.tst.yandex-team.ru/${path}`)
    }
}