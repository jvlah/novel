//event listener for the get data from the api method. 
document.getElementById('submit').addEventListener('click',postData);

/**
 * Gets the data from the form and stores it in an array. 
 * Lol 
 */

let arr = [];
let pricephone = [];
let keywords = [];

let socialMediaTarget = [];
let smChannels = [];
let gglAdds = [];

let promotedGeneral = false;
let promotedSocialMedia = false;
let promotedGoogleAdds = false; 

function getDataFromForm() {

    //get the phones checked and store into array. 
    if(document.getElementById("nothing").checked) {
        alert("You Must select all the social media channels before continuing.");
    }
    
    $("#ggAdds:checked").each(function(){
        gglAdds.push($(this).val());
        promotedGoogleAdds = true;
    });

    $("#smTargetID:checked").each(function(){
        socialMediaTarget.push($(this).val());
        promotedGeneral = true;
    });

    $("#smChannel:checked").each(function(){
        smChannels.push($(this).val());
        promotedSocialMedia = true;
    });

    //phone checked and stores in the array.
    $("#whichphone:checked").each(function(){
        arr.push($(this).val());
    });

    //prices are stored in a array
    $("#phone1usd").each(function(){
        pricephone.push($(this).val());
    });
    
    //this gets the all keywords which are selected and stores them in an array. 
    $("#keyword:checked").each(function(){
        keywords.push($(this).val());
    });

    console.log("Which Phone ID: " + arr);
    console.log("Price of the phone: " + pricephone);
    console.log("SM Target: " + socialMediaTarget);
    console.log("SM Channels: " + smChannels);
    console.log("Google Adds: " + gglAdds);
    console.log("Keywords: " + keywords);
}


function getDataFromApi() {
    fetch('http://localhost:5000/api/sales/phoneContract=1')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        data.id = arr;
        data.budget = pricephone;
        data.promoted = promotedGeneral;
        data.gglAds.searchTargetKeywords = keywords;
        data.gglAds.displayTargetKeywords = keywords;
        data.gglAds.promoted = promotedGoogleAdds;
        data.gglAds.budget = pricephone;
        data.smChannels.fbPage = keywords;
        data.smChannels.ytPage = keywords;
        data.smChannels.instaPage = keywords;
        data.smChannels.fbContent = keywords;
        data.smChannels.ytContent = keywords;
        data.smChannels.instaContent = keywords;
        data.smChannels.promoted = promotedSocialMedia;
        data.smChannels.budget = pricephone;
        return data;
    });
} 

function postData() {

    let dataPost = getDataFromApi();

$.ajax({
    type: "POST",
    url: 'http://localhost:5000/api/sales',
    dataType:'json',
    data: JSON.stringify({dataPost}),
    contentType: 'application/json',
    success: function(){
        alert("fuck yea");
    },
  });

   // fetch('http://localhost:5000/api/sales',{
   //     method:'POST',
   //     headers: {
   //         'Accept':'application/json',
   //         'Content-Type':'application/json'
   //     },
   //     body: JSON.stringify(dataPost)
   // })
   // .then((res) => res.json())
   // .then((dataPost) => {
   //      console.log("TO TREBA GLEDATI:" + dataPost);
   // })
}




   //let phoneJson = JSON.stringify(arr);
    //console.log(phoneJson);
    //console.log(phoneJson,keywordJson,priceJson,targetJson)
/* 
    let phoneFormat = { 
        "Sales":"0", 
        "ID":1,
        "Budget":array1[0],
        "Promoted":"10", 
        "gglAds":{
              "Promoted":"2",
              "Budget":array1[0],
              "SeachTargetKeywords":keywords,
              "DisplayTargetKeywords":keywords
        },
        "smChannels":{
            "Promoted":"1",
            "Budget":array1[0],
            "FBPage":keywords,
            "YTPage":keywords,
            "InstaPage":keywords,
            "FBContent":keywords,
            "YTContent":keywords,
            "InstaContent":keywords
        }
      }

      console.log(phoneFormat);

      $.ajax({
        type: 'GET',
        url: 'https://localhost:5000/api/sales/phoneContract=1',
        contentType: "application/json",
        data: phoneFormat,
        success: function(msg){
            alert('wow' + msg);
        }
    });
 */




