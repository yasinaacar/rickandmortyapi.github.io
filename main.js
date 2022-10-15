const body=document.getElementById('body');//Arka plan resmini değiştirmek için body etiketine erişiyoruz
const brand=document.getElementById('logo'); //İnput kısmını kaldırdıktan sonra arama kısmına erişmek için ögeye erişiyoruz
const inputGroup=document.querySelector('.input-group');
const input=document.querySelector('.input-area');
const searchBtn=document.querySelector('.search-button');
const filterArea=document.querySelector('.filter');
const aliveBtn=document.querySelector('.alive');
const deadBtn=document.querySelector('.dead');
const unknowBtn=document.querySelector('.unknow');

searchBtn.addEventListener('click',reqInput);//Arama butonuna tıklandığında çalışacak kısım

aliveBtn.addEventListener('click', reqAlive);//filtreler kısmındaki alive(hayatta) butonuna tıkladıgında çalışacak kısım

deadBtn.addEventListener('click', reqDead)//filtreler kısmındaki dead(ölü) butonuna tıkladıgında çalışacak kısım

unknowBtn.addEventListener('click', reqUnknow)//filtreler kısmındaki unknow(bilinmiyor) butonuna tıkladıgında çalışacak kısım

function showCharacter(result){ //karakterlerle igili servisten aldığımız bilgileri ekranada göstermek için yazdığım fonksiyon
    const all=result.results;//Gelen tüm servis bilgilerini bir değişkene atıyorum 

    for(let ch of all ){//bilgileri atadığım değişken içinde for döngüsüyle dolaşarak her bilgi dizisine tek tek erişiyorum
        createCard(ch)
    }

    setBackgrounds()

}


function createCard(ch){//tek tek eriştiğim dizilerdeki bilgileri ekranda göstereceğim kartların içine yerleştiriyorum
    
    let card=`
    <div class="col-lg-3">
    
    <div class="card">
                    
            <img src="${ch.image}" class="card-img-top" alt="...">

            <h5 class="character-name text-center"> ${ch.name} </h5>

            <span class="statues text-center id='statues'">${ch.status}</span>

            <ul class="list-group list-group-flush">

                <li class="list-group-item">Species: <span class="species"> ${ch.species} </span></li>

                <li class="list-group-item">Gender: <span class="gender"> ${ch.gender}  </span></li>
          
                <li class="list-group-item">Origin: <span class="origin"> ${ch.origin.name}  </span></li>

                <li class="list-group-item">Location: <span class="location"> ${ch.location.name}  </span></li>
            </ul>
        </div>
    </div>`

    document.querySelector('.card-row').insertAdjacentHTML('beforeend', card);//oluşturduğum kartı html dosyasındaki yerine(card-row adlı class'ın olduğu kısıma) yerleştiriyorum

       

}


function setBackgrounds(){//arka plan resmini değiştirmek için yazdığım fonksiyon

    body.style.backgroundImage='url(img/result-bg.jpg)';//css dosyasında belirttiğim resim ile bu adresteki resmi değiştiriyorum
    body.style.backgroundSize='auto';
    body.style.backgroundRepeat='auto'
    inputGroup.style.display='none';//arama çubuğunu ekrandan kaldırıyorum
    filterArea.style.display='none';//filtreleme kısmını ekrandan kaldırıyorum
    brand.style.display='flex'//kaldırdığım kısmlar yerine ana ekrana dönüş sağlayacak logoyu ekrana gösteriyorum


}

function err(){//Girdi alarak arama yaptığımızda kullanıcının girmiş olduğuğu girdinin api'de bir karşılığı yoksa hata olarak bu kısmı çalıştırıyorum
    window.alert('Please Enter a Valid Character Name');
    input.value=''

}

function warning(){//hali hazırda atanmış link adreslerinden (alive/dead/unknow) cevap alamazsak bu hata kısmını çalıştırıyorum
    window.alert('UPSS!! Server is offline. Please try again later')
}
