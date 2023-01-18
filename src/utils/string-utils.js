const translit = function translit(str)
{
    var lang = getLang(str)
    var ru=("Й-Ц-У-К-Е-Н-Г-Ш-Щ-З-Х-Ъ-Ф-Ы-В-А-П-Р-О-Л-Д-Ж-Э-Я-Ч-С-М-И-Т-Ь-Б-Ю-Ë-й-ц-у-к-е-н-г-ш-щ-з-х-ъ-ф-ы-в-а-п-р-о-л-д-ж-э-я-ч-с-м-и-т-ь-б-ю-ё").split("-")   
    var en=("Q-W-E-R-T-Y-U-I-O-P-[-]-A-S-D-F-G-H-J-K-L-;-'-Z-X-C-V-B-N-M-,-.-~-q-w-e-r-t-y-u-i-o-p-[-]-a-s-d-f-g-h-j-k-l-;-'-z-x-c-v-b-n-m-,-.`").split("-")   
    var res = ''
    for(var i=0, l=str.length; i<l; i++)
    { 
        var s = str.charAt(i),
            n = null,
            chr = null
        if(lang == 'ru'){
            n = ru.indexOf(s)
            chr = en[n]
        }
        else if(lang == 'en'){
            n = en.indexOf(s)
            chr = ru[n]
        }
        if(n >= 0) { res += chr } 
        else { res += s } 
    } 
    return res  
}

const getLang = function(str){
    if(str === undefined){
        throw new Error('Input string cannot be undefined')
    }
    if(str.trim().length === 0){
        throw new Error('Input string cannot be empty')
    }

    if(/^[a-zA-Z]+$/.test(str)){
        return 'en'
    }

    if(/^[а-яА-Я]+$/.test(str)){
        return 'ru'
    }

    return undefined
}

export { getLang, translit }