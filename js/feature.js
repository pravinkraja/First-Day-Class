
var featuresubmitbtn = document.getElementById("featuresubmitbtn");
var featureFrm = document.getElementById("featurefrm")
var featureLoadingDiv = document.getElementById("featureLoadingDiv")
featuresubmitbtn.addEventListener("click", function(){
        //make the loader visible
        featureLoadingDiv.classList.remove("send-removed");
        //hide the form from the user
        featureFrm.classList.add("send-removed");
});

async function onfeatureload(){
        var response = await fetch("http://localhost:3000/features");
        var result = await response.json();

        var feature1 = result[0]; 

        document.getElementById("feature1").innerHTML = 
        feature1.name + "<span class='badge badge-primary badge-pill'>" + feature1.author + "," + feature1.time + "</span>";

        
        console.log(feature1);
}


      



onfeatureload();