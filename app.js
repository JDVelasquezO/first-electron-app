window.addEventListener('load', () => {
    fillForm()
});

let fillForm = () => {
    let form = document.getElementById("form");
    let selectEffect = document.getElementById("effect");
    let divImage = document.getElementById("img");
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        let valueOpt = selectEffect.value
        let val = ""
        val = validateEffect(valueOpt, val)
        consumeApi(val, divImage)
    });
}

let validateEffect = (valueOpt, val) => {
    if (valueOpt == "b") {
        val = "blur"
    } else if (valueOpt == "g") {
        val = "grayscale"
    }
    return val
}

let consumeApi = (val, divImage) => {
    let url = ""
    fetch(`https://picsum.photos/200/300?${val}`)
    .then(res => {
        url = res.url
        console.log(url);
        console.log(val);
        
        divImage.innerHTML = `
            <img src="${url}" width="200" height="300">
        `
    })
}
