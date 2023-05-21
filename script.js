let typeElm = document.querySelectorAll('.type')
let arr = Array.from(typeElm)

arr.map((item) => {
    let typeElmText = item.textContent.trim()
    item.textContent = ''
    let count = 0
    let textLength = typeElmText.length
    let speed = Number.parseInt(item.dataset.speed) + Number.parseInt(typeElmText.length)
    function typing() {
        item.textContent += typeElmText[count++];
        if (textLength < count) {
            count = 0
            item.textContent = ''
        }
    }
    let stop = setInterval(() => {
        typing()
    }, speed);
})


