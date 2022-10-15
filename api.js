//Api işlemlerinin yapıldığı alan

const url=`https://rickandmortyapi.com/api/character/?` //Api'den bilgi alacağımız linkin temel iskeletini bir değişkene atıyorum


function reqInput(){//Kullanıcıdan girdi alarak arama yapılacaksa bu fonksiyon içindeki api isteği oluşturma kısmı çalışacak

    fetch(`${url}name=${input.value}`).//url+girilen ismi arat
    then(data=> data.json()).//api deki bigileri JSON formatına çevir
    then(result=> {//gelen bilgileri belirtilen fonksiyon ile çalıştır
        showCharacter(result)
    }).
    catch(err)//eğer hata oluşursa bu kısmı çalıştır
}

function reqAlive(){//Filtreleme kısmındaki alive kısmında işlem yapılacaksa bu fonksiyon ile istek oluşturuyorum
    fetch(`${url}status=alive`).
    then(data=> data.json()).
    then(result=>{
        showCharacter(result)
    }).catch(warning)
}

function reqDead(){//Filtreleme kısmındaki dead kısmında işlem yapılacaksa bu fonksiyon ile istek oluşturuyorum

    fetch(`${url}status=dead`).
    then(data=> data.json()).
    then(result=>{
        showCharacter(result)
    }).catch(warning)
}

function reqUnknow(){//Filtreleme kısmındaki unknow kısmında işlem yapılacaksa bu fonksiyon ile istek oluşturuyorum

    fetch(`${url}status=unknow`).
    then(data=> data.json()).
    then(result=>{
        showCharacter(result)
    }).catch(warning)
}