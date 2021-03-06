(function () {
  function fnAddButtons() {
    if(window.location.pathname != "/" && window.location.host == "open.spotify.com"){
      var btn = document.createElement("button");
      var btnleave = document.createElement("button");
      var btnskip = document.createElement("button");
      var btnback = document.createElement("button");
      btn.textContent = "Play";
      btn.id = "play-extension-btn";
      btn.type = "play-extension";
      btnleave.textContent = "Leave";
      btnleave.id = "play-extension-btn-leave";
      btnleave.type = "play-extension-leave";
      btnskip.textContent = "Skip";
      btnskip.id = "play-extension-btn-skip";
      btnskip.type = "play-extension-skip";
      btnback.textContent = "Back";
      btnback.id = "play-extension-btn-back";
      btnback.type = "play-extension-back";
      document.querySelector('._95e9f2bdf9c64702a6123c2d6de8076b-scss').appendChild(btn);
      document.querySelector('._95e9f2bdf9c64702a6123c2d6de8076b-scss').appendChild(btnback);
      document.querySelector('._95e9f2bdf9c64702a6123c2d6de8076b-scss').appendChild(btnskip);
      document.querySelector('._95e9f2bdf9c64702a6123c2d6de8076b-scss').appendChild(btnleave);
    } else if(!window.location.search == "" && window.location.host == "www.youtube.com") {
        var ytbtn = document.createElement("button");
        var ytbtnleave = document.createElement("button");
        var ytbtnskip = document.createElement("button");
        var ytbtnback = document.createElement("button");
        ytbtn.textContent = "Play";
        ytbtn.id = "play-extension-ytbtn";
        ytbtn.type = "play-extension";
        ytbtnleave.textContent = "Leave";
        ytbtnleave.id = "play-extension-ytbtn-leave";
        ytbtnleave.type = "play-extension-leave";
        ytbtnskip.textContent = "Skip";
        ytbtnskip.id = "play-extension-ytbtn-skip";
        ytbtnskip.type = "play-extension-skip";
        ytbtnback.textContent = "Back";
        ytbtnback.id = "play-extension-ytbtn-back";
        ytbtnback.type = "play-extension-back";
        document.querySelector('.title.style-scope.ytd-video-primary-info-renderer').appendChild(ytbtn);
        document.querySelector('.title.style-scope.ytd-video-primary-info-renderer').appendChild(ytbtnback);
        document.querySelector('.title.style-scope.ytd-video-primary-info-renderer').appendChild(ytbtnskip);
        document.querySelector('.title.style-scope.ytd-video-primary-info-renderer').appendChild(ytbtnleave);
    }
  }

  function fnDefineEvents() {
      if(window.location.pathname != "/" && window.location.host == "open.spotify.com"){
        document.getElementById("play-extension-btn").addEventListener("click", function (event) {
            link = window.location.href
            chrome.runtime.sendMessage(link);
        });

        document.getElementById("play-extension-btn-leave").addEventListener("click", function (event) {
            chrome.runtime.sendMessage("leave");
        });

        document.getElementById("play-extension-btn-skip").addEventListener("click", function (event) {
            chrome.runtime.sendMessage("skip");
        });

        document.getElementById("play-extension-btn-back").addEventListener("click", function (event) {
            chrome.runtime.sendMessage("back");
        });

      } else if(!window.location.search == "" && window.location.host == "www.youtube.com"){
        document.getElementById("play-extension-ytbtn").addEventListener("click", function (event) {
            link = window.location.href
            chrome.runtime.sendMessage(link);
        });

        document.getElementById("play-extension-ytbtn-leave").addEventListener("click", function (event) {
            chrome.runtime.sendMessage("leave");
        });

        document.getElementById("play-extension-ytbtn-skip").addEventListener("click", function (event) {
            chrome.runtime.sendMessage("skip");
        });

        document.getElementById("play-extension-ytbtn-back").addEventListener("click", function (event) {
            chrome.runtime.sendMessage("back");
        });
      }
  }

    window.addEventListener('yt-page-data-updated', function () {
        console.log("url changed")
        setTimeout(function(){
            if(!document.getElementById("play-extension-ytbtn") && window.location.host == "www.youtube.com") {
                fnAddButtons();
                fnDefineEvents();
            }
        }, 1500);
    });

    window.addEventListener('load', function () {
        console.log("load")
        setTimeout(function(){
            if(!document.getElementById("play-extension-ytbtn") || !document.getElementById("play-extension-btn")) {
                fnAddButtons();
                fnDefineEvents();
            }
        }, 1500);
    });
})();