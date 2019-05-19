function doimau(n,duong){
    if(n==1){
        document.getElementById('Frame').src = duong;
        document.getElementById('find').style.background = "lightgray";
        document.getElementById('search').style.background = "lightblue";
        document.getElementById('hostel').style.background = "lightgray";

    }else if (n == 2){
        document.getElementById('Frame').src = duong;
        document.getElementById('find').style.background = "lightblue";
        document.getElementById('search').style.background = "lightgray";
        document.getElementById('hostel').style.background = "lightgray";
    }else if (n == 3){
        document.getElementById('Frame').src = duong;
        document.getElementById('find').style.background = "lightgray";
        document.getElementById('search').style.background = "lightgray";
        document.getElementById('hostel').style.background = "lightblue";
    }
}