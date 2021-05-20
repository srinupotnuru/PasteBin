function copyToClipboard(text) {  
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
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
    
    data['title']=title;
    data['author']=author.value;
    data['text']=text.value;
    data['public']=public;

    fetch("/create",{
        method:"POST",
        body:JSON.stringify({data}),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
    }).then((response) => response.json()).then((data)=>{
        let url=window.location.href+data["result"];
        
        copyToClipboard(url);
    });
    
}