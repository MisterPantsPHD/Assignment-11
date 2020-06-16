var wanted = {}
module.exports = {
    beforeEach: browser => {
        wanted = browser.page.wantedObjects()
        wanted
            .navigate()
    },
    after: browser => {
        wanted
            .end()
    },
    'Header Error Check': browser =>{
        var errorCheck  = (object , info , result) => {
            object
            .setValue('@header' , info.one)
            .click('@submit')
            .assert.containsText('@errorList' , result.one)
          }
        errorCheck(wanted , ' ' , 'The "Header" field must be included.')
        errorCheck(wanted , 'd' , 'The "Header" field should be between 9 and 19 characters long.')
        

    },

}