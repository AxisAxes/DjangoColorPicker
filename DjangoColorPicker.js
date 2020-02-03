function getNewColor(element) {
    var defaultColors = [
        '#7FFFD4',
        '#0000FF',
        '#A52A2A',
        '#DEB887',
        '#5F9EA0',
        '#7FFF00',
        '#D2691E',
        '#FF7F50',
        '#6495ED',
        '#00008B',
        '#008B8B',
        '#B8860B',
        '#006400',
        '#BDB76B',
        '#556B2F',
        '#8B0000',
        '#E9967A',
        '#8FBC8F',
        '#483D8B',
        '#2F4F4F',
        '#B22222',
        '#228B22',
        '#FF00FF',
        '#FFD700',
        '#DAA520',
        '#008000',
        '#ADFF2F',
        '#FF69B4',
        '#CD5C5C',
        '#4B0082',
        '#F0E68C',
        '#7CFC00',
        '#ADD8E6',
        '#F08080',
        '#90EE90',
        '#FFB6C1',
        '#FFA07A',
        '#20B2AA',
        '#87CEFA',
        '#778899',
        '#B0C4DE',
        '#00FF00',
        '#32CD32',
        '#FF00FF',
        '#800000',
        '#66CDAA',
        '#0000CD',
        '#BA55D3',
        '#9370DB',
        '#3CB371',
        '#7B68EE',
        '#00FA9A',
        '#48D1CC',
        '#191970',
        '#808000',
        '#6B8E23',
        '#FF4500',
        '#DA70D6',
        '#EEE8AA',
        '#98FB98',
        '#AFEEEE',
        '#DB7093',
        '#FFEFD5',
        '#FFDAB9',
        '#CD853F',
        '#FFC0CB',
        '#DDA0DD',
        '#B0E0E6',
        '#BC8F8F',
        '#8B4513',
        '#FA8072',
        '#FAA460',
        '#2E8B57',
        '#A0522D',
        '#87CEEB',
        '#6A5ACD',
        '#708090',
        '#00FF7F',
        '#4682B4',
        '#D2B48C',
        '#008080',
        '#D8BFD8',
        '#FF6347',
        '#40E0D0',
        '#EE82EE',
        '#F5DEB3',
        '#FFFF00',
        '#9ACD32'
    ]

    console.log('getNewColor start')
    var symbols, color;
    symbols = '123456789ABCDEF';
    color = '#';
    for (var i=0; i<6; i++) {
        color = color + symbols[Math.floor(Math.random() *16)]
    }
    
    if (color == '#000000' || color == '#FFFFFF') {
        for (var i=0; i<6; i++) {
            color = color + symbols[Math.floor(Math.random() *16)]
        } 
        if (color == '#000000' || color == '#FFFFFF') {
            if (element.value == '#000000' || element.value == '#FFFFFF') {
                color = defaultColors[Math.floor(Math.random() * defaultColors.length)]
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
            color = defaultColors[Math.floor(Math.random() * defaultColors.length)]
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
