function copyToClipboard(text) {  
    text=text.replace("index.html","");
    console.log(text);
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    window.location.href=text;

  }
function doit()
{
    var data={
        'title':"",
        'author':"",
        'text':"",
        'public':""};
    var title=document.getElementById('title').value;
    var author=document.getElementById('author');
    var text=document.getElementById('paste');
    var public=document.getElementById('private_check').checked;
    var current = new Date();

    
    data['title']=title;
    data['author']=author.value;
    data['text']=text.value;
    data['public']=public;
    data['time']=current.toLocaleString();

    fetch("/create",{
        method:"POST",
        body:JSON.stringify({data}),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
    }).then((response) => response.json()).then((data)=>{
        let temp=window.location.href;
       
        let url=temp+"preview.html?id="  + data["result"];
        
        copyToClipboard(url);
    });
    
}