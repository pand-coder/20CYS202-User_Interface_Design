var cardNumInput = document.querySelector('#cardNum')

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value
    cNumber = cNumber.replace(/\s/g, "")

    if(Number(cNumber)){
        cNumber = cNumber.match(/.{1,4}/g)
        cNumber = cNumber.join(" ")
        cardNumInput.value = cNumber
    }
});

var expiryInput = document.querySelector('#expiry')

expiryInput.addEventListener('keyup', () => {
    let cNumber = expiryInput.value
    cNumber = cNumber.replace(/\s/g, "")

    if(Number(cNumber)){
        cNumber = cNumber.match(/.{1,2}/g)
        cNumber = cNumber.join("/")
        expiryInput.value = cNumber
    }
});

