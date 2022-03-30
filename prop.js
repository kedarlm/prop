function variable()
{var username=document.getElementById("name").value;
   

    if(username=="Jyothi")
    {
        window.location.href="jyothi.html";
    }
    else if(username=="Dhana")
    {
        window.location.href="dhana.html"
    }
    else if(username=="Nitish")
    {
        window.location.href="nitish.html"
    }
    else if(username=="Gangadhar")
    {
        window.location.href="ganga.html"
    }
    else if(username=="Manikanta")
    {
        window.location.href="mani.html"
    }

    else{
        alert("valid name ");
    }
}