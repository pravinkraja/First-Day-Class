
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

        var featurelist = document.getElementById('feature-list')

        for (var i= 0; i < result.length; i++) {
                var lielement = document.createElement("li");
                lielement.className = "list-group-item";
                lielement.innerHTML = 
                result[i].body + "<span class='badge badge-success'>" + result[i].author + "," + result[i].time + "</span>";
                featurelist.appendChild(lielement);
        }
}

onfeatureload();

function onfeaturesubmit() {
        // send a req to server
        console.log("sending POST request to server ...");
}