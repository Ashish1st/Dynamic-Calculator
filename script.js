const btn = document.querySelectorAll('.btn')
const input = document.querySelector('#input')
let string = ""

btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        let val = e.target.textContent;
        // console.log(val)
        switch (val) {
            case "=":
                string = eval(string)
                input.value = string
                break;
            case "DE":
                string = string.substring(0, string.length - 1)
                input.value = string
                break;
            case "AC":
                string = ""
                input.value = 0
                break;
            default:
                string += val;
                input.value = string

        }
    })
})