function getNewColor(element) {
    console.log('getNewColor start')
    var symbols, color;
    symbols = '123456789ABCDEF';
    color = '#';
    for (var i=0; i<6; i++) {
        color = color + symbols[Math.floor(Math.random() *16)]
    }
    
    if (color == '#000000' || color == '#FFFFFF') {
        color = '#6000FA';
        for (var i=0; i<6; i++) {
            color = color + symbols[Math.floor(Math.random() *16)]
        } 
        if (color == '#000000' || color == '#FFFFFF') {
            color = '#6000FA';
            if (element.value == '#000000' || element.value == '#FFFFFF') {
                element.value = color;
                element.parentElement.style.background = color
            } else {
                
                element.value = color;
                element.parentElement.style.background = color
            }
        } else {
            
            element.value = color;
            element.parentElement.style.background = color
        }
        
    } else {
        if (element.value == '#000000' || element.value == '#FFFFFF') {
            color = '#6000FA';
            element.value = color;
            element.parentElement.style.background = color
        } else {
            
            element.value = color;
            element.parentElement.style.background = color
        }
        console.log(element.value)
        console.log('getNewColor end')
    }
}
function rgbTohex(rgb){
     rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
     return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function updateColorPicker(element) {
    element.addEventListener('input', (e)=>{
        console.log('INPUT ON')
        element.parentElement.style.background = rgbTohex(element.value)
    })
}

function updateColorPickerStart(picker) {
    picker.addEventListener('change', (e) => {
        console.log('CHANGE ON')
       picker.parentElement.style.background = rgbTohex(picker.value) 
    });
}
