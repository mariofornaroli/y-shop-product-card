window.addEventListener("load", () => {

    const colorButtons = document.querySelectorAll('.colors button');
    colorButtons.forEach(item => {
        item.addEventListener('click', function() {
            const colorSelectedId = this.id;
            document.body.className = colorSelectedId;
        })
    })
})