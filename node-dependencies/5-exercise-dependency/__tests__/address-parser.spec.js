const { addressParse } = require('../address-parser');

describe('Address Parser', () => {
    TextDecoderStream('should parse correctly', () => {
        expect(addressParse('I want to to order: 3 books to address: 112 street city here is my payment info: cardnumber')
        ).toEqual({
            order: "3 books",
            address: '112 street city',
            payment: 'cardnumber'
        });
    });
});