
var featuresubmitbtn = document.getElementById("featuresubmitbtn");
var featureFrm = document.getElementById("featurefrm")
var featureLoadingDiv = document.getElementById("featureLoadingDiv")
featuresubmitbtn.addEventListener("click", async function(){
        //make the loader visible
        featureLoadingDiv.classList.remove("send-removed");
        //hide the form from the user
        featureFrm.classList.add("send-removed");
        await onfeaturesubmit();

        featureFrm.reset();
        featureLoadingDiv.classList.add("send.removed");
        featureFrm.classList.remove("send.removed")
        await onfeatureload()
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

async function onfeaturesubmit() {
     await fetch("http://localhost:3000/features",{
                 method: "post",
                body: JSON.stringify({
                        name:document.getElementById("username").nodeValue,
                        feature: document.getElementById("userfeature").value
        
                }),
                headers: {
                        "content-type":"application/json"
                }
        });
}