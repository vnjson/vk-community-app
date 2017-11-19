

  var data = {
        "title": "Экосистема движка",

        "head": [
        {
            "text": "Наименование"
        }, 
        {
            "text": "Описание",
            "align": "center"
        },
        {
          "text": "Версия"
        }
        ],
        "body": [
            [
              {"text": "vnjson-js"},
              {"text": "Библиотека выполняющая ВН в браузере"},
              {"text": "v0.9.0"},
             /* {"text": "vnjson-tgtq"}*/
            ],
            [
              
              {"text": "vnjson-cli"},
              {"text": "Консольная программа, на базе nodejs"},
               {"text": "v0.4.7"},
             /* {"text": "Создание текстовых квестов для телеграмма"}*/
            ],
            [
              {"text": "vnjson-sdk"},
              {"text": "GUI обертка вокруг CLI версии"},
             
              {"text": "v0.5.2"},
             /* {"text": "v0.3.2"}*/
            ]
        ]
    };

var app = {
      getCommits: function(){
       var url = 'https://api.github.com/repos/vnjson/vnjson.js/commits';
       fetch(url)
          .then( r => r.json() )
          .then( data => {
            data.forEach(function(item){
             var tpl =  `<li class='commit'>
                            <span><b>${item.commit.message} </b></span>
                            <span>${item.commit.committer.name} </span>
                            <span>${item.commit.committer.date}</span>
                         </li>`
              
              document
                .getElementById('commitsTable')
                .innerHTML += tpl;
  
            })
            
          });
      }
}   
  VK.init(function() {
    app.getCommits();
 // VK.callMethod("appWidgets.update", 'table', 'return ' + JSON.stringify(data) + ';');
//  
    document
        .getElementById('add-w')
        .addEventListener('click', function(e){
          //e.preventDefault();
          VK.callMethod("showGroupSettingsBox", +65);
           VK.callMethod("showAppWidgetPreviewBox", 'table', 'return ' + JSON.stringify(data) + ';');
          VK.addCallback('onSettingsChanged', function(){
            
          });
         
          VK.addCallback('onAppWidgetPreviewSuccess', function (){
            alert("Виджет успешно подключен");
          });  
        })
  }, function() {
     // API initialization failed
     alert('[ initialization faled ]')
}, '5.69');