const headline_display = document.querySelector("#headline-display")
const display = document.querySelector("#display")
const inputSize = document.querySelector("#input-size")
const showSize = document.querySelector("#show-size")
const fontFamily = document.querySelector("#select-font")
const colorInput = document.querySelector("#input-color")
const bgColorInput = document.querySelector("#input-bg-color")
const textInput = document.querySelector("#enter-text")
const showFont = document.querySelector("#show-font")
const showColor = document.querySelector("#show-color")
const showBgColor = document.querySelector("#show-bg-color")
const weightInput = document.querySelector("#select-weight")
const styleInput = document.querySelector("#select-style")
const spacingInput = document.querySelector("#input-spacing")
const paddingInput = document.querySelector("#input-padding")
const showWeight = document.querySelector("#show-weight")
const showStyle = document.querySelector("#show-style")
const showSpacing= document.querySelector("#show-spacing")
const showPadding= document.querySelector("#show-padding")


inputSize.addEventListener('input', function() {
    const fontSize = inputSize.value
    headline_display.style.fontSize = fontSize+'px'
    showSize.innerHTML = fontSize
})
fontFamily.addEventListener('input',function() {
    const fontInput = fontFamily.value
    headline_display.style.fontFamily = fontInput
    showFont.innerHTML = fontInput
})
colorInput.addEventListener('input',function() {
    const color = colorInput.value
    headline_display.style.color = color
    showColor.innerHTML = color
})
bgColorInput.addEventListener('input',function() {
    const bgColor = bgColorInput.value
    headline_display.style.backgroundColor = bgColor
    showBgColor.innerHTML = bgColor
})
textInput.addEventListener('input',function() {
    const text = textInput.value
    
    headline_display.innerHTML = `<h1>${text}</h1>`
})
weightInput.addEventListener('input',function() {
    const weight = weightInput.value
    display.style.fontWeight = weight
    showWeight.innerHTML = weight
})
styleInput.addEventListener('input',function() {
    const style = styleInput.value
    display.style.fontStyle = style
    showStyle.innerHTML = style
})
spacingInput.addEventListener('input', function() {
    const spacing = spacingInput.value
    display.style.letterSpacing = spacing+'px'
    showSpacing.innerHTML = spacing
})
paddingInput.addEventListener('input', function() {
    const padding = paddingInput.value
    display.style.padding = padding+'px'
    showPadding.innerHTML = padding
})