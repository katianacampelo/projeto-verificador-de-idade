function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById('inumber')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[erro]verifique os dados e tente novamente!')

    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade < 12){
            img.setAttribute('src', 'imagens/foto-crianca-menino.png')
            }
            else if(idade >= 12 && idade < 21){
                img.setAttribute('src', 'imagens/foto-menino-jovem.png')
            }
            else if(idade < 60) {
                img.setAttribute('src', 'imagens/foto-homem-adulto.jpg')
            }
            else{
                img.setAttribute('src', 'imagens/foto-homem-maduro.jpg')
            }

        }
        else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade < 12){
                img.setAttribute('src', 'imagens/foto-crianca-menina.jpg')
            }
            else if(idade >= 12 && idade < 21){
                img.setAttribute('src', 'imagens/foto-menina-jovem.png')
            }
            else if(idade < 60) {
                img.setAttribute('src', 'imagens/foto-mulher-adulta.jpg')
            }
            else{
                img.setAttribute('src', 'imagens/foto-mulher-madura.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectmos <strong>${genero}</strong> com <strong>${idade} </strong>anos`
        res.appendChild(img)
        
        
    }
   
}