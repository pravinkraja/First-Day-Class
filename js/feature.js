
var featuresubmitbtn = document.getElementById("featuresubmitbtn");
var featureFrm = document.getElementById("featurefrm")
var featureLoadingDiv = document.getElementById("featureLoadingDiv")
featuresubmitbtn.addEventListener("click", function(){
        //make the loader visible
        featureLoadingDiv.classList.remove("send-removed");
        //hide the form from the user
        featureFrm.classList.add("send-removed");
});