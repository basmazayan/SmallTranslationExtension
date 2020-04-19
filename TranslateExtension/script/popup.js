var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
var keyAPI = "trnsl.1.1.20191208T164557Z.64d01e4a45452fa3.459e48688d197f61f88dc9413ecec592841d2171";
//var KEY = "trnsl.1.1.20170824T105138Z.7f63c8f08b90b918.7ac577a8b078bb3e6354250a7b7b8f4614208ba9";
window.onload=function()
{
    document.querySelector('#input').addEventListener("input",ochange);
    document.querySelector('#lang').addEventListener("change",ochange);
};
function ochange() 
{
    var xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#input').value,
        langAPI = document.querySelector('#lang').value,
        data = "key="+keyAPI+"&text="+textAPI+"&lang="+langAPI;
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) 
        {
            var APIresponse = this.responseText;
            //console.log(APIresponse);
            var json = JSON.parse(APIresponse);
            if(json.code == 200) 
            {
                document.querySelector('#result').innerHTML = json.text[0];
            }
            else 
            {
                document.querySelector('#result').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}