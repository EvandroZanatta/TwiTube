var formDownload = document.getElementById("formDownload");
var buttonDownload = document.getElementById("button-download");
formDownload.addEventListener("submit", function(e){
    
    e.preventDefault();
    
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var response = JSON.parse(this.response);  
        var elAudio = document.getElementById("player");
        elAudio.setAttribute('src', response.local);
        elAudio.play();
        
        var linkdDownload = document.getElementById('downloadLink');
        linkdDownload.setAttribute('href', response.local);
        
        var boxMain = document.getElementById('showMain');
        var boxResult = document.getElementById('showResult');
        
        if (boxMain.classList){
          boxMain.classList.add('disabled');
        }else{
          boxMain.className += ' ' + 'disabled';
        }
        
        if (boxResult.classList){
          boxResult.classList.add('show');
        }else{
          boxResult.className += ' ' + 'show';
        }
      }
    });
    
    var urlVideo = document.getElementById('fieldLink').value;
    
    xhr.open("GET", "https://twitube-evandrozanatta.c9.io/download/?link="+urlVideo);
    
    xhr.send(data);
    
    buttonDownload.value = 'Aguarde...';
    
    
});

