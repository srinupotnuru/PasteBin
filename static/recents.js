var link=window.location.href;
        var url=new URL(link);
       
        fetch("/getdocs",{
        method:"POST",
        body:JSON.stringify({url}),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
    }).then((response) => response.json()).then((data)=>{
        var db=data['res'];
        var n=db.length;
        for(var i=0;i<n;i++)
        {
            var st=db[i]['text'];
            if(st.length>180)
            {
                st=st.substring(0,180);
            }
            console.log(db[i]);
            var s="";
            s=s+'<div class="card mt-2"><div class="card-header inline"><h5 class="float-left">';
            s=s+db[i]['title'];
            s=s+'</h5>';
            s=s+'<h6 class="float-right">' + db[i]['time'] + '</h6></div>';
            s=s+'<div class="card-body"><p class="card-text">';
            s=s+st;
            s=s+ '</p><b><span>';
            s=s+'@'+db[i]['author'];
            s=s+'</span></b></div></div>';
            console.log(s);
            $('#docs').append(s);


        }
        
    });


