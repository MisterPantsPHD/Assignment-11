module.exports = {
    url: 'http://localhost:3000/#/enter',
    elements: {
        menuButton: {
            selector: '(//button)[2]',
            locateStrategy: 'xpath'
        },
        enterWanted: {
            selector: '(//a[@class="bm-item menu-item"])[2]',
            locateStrategy: 'xpath'
        },
        header: 'input[name="hdrInput"]',
        mKE: 'input[name="mkeInput"]',
        oAI: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'select[name="sexInput"]',
            male: 'option[value="M"]',
            female: 'option[value="F"]',
            other: 'option[value="O"]',
            sUnknown: 'option[value="U"]',
        race: 'select[name="racInput"]',
            asian: 'option[value="A"]',
            black: 'option[value="B"]',
            hispanic: 'option[value="H"]',
            americanIndian: 'option[value="I"]',
            white: 'option[value="W"]',
            rUnknown: 'option[value="U"]',
        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        dateOfWar: 'input[name="dowInput"]',
        driversL: 'input[name="olnInput"]',
        dLState: 'input[name="olsInput"]',
        dLExDate: 'input[name="oldInput"]',
        licensePlate: 'input[name="licInput"]',
        licenseState: 'input[name="lisInput"]',
        liscenseExDate: 'input[name="lidInput"]',
        submit: 'button#saveBtn',
        clear: 'button#clearBtn',
        errorList: 'ul#errorList'
    }




}