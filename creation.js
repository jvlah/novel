
let brandtopicarr = [];
let topicmobilecontentArr = [];

let keywordsgglsrc = [];
let demographicgglsrc = [];
let platformgglsearch = [];

let keywordsggldisplay = [];
let demographicggldisplay = [];
let platformggldisplay = [];

let phoneid;

//targeting mobile content
let fbpage;
let inpage;
let ytpage;

let fbcontent;
let incontent;
let ytcontent;

let namegooglesearch;
let locationgooglesearch;
let schedulegooglesearch;

let namegoogledisplay;
let locationgoogledisplay;
let schedulegoogledisplay;

let fbsmpages = [];
let instasmpages = [];
let ytsmpages = [];


document.getElementById('submit').addEventListener('click',getDataInput);

function getDataInput() {
    
    //BRAND CONTENT------------------------------------------------------------
    //1. Topic Keyword
    
    $("#brandtopic:checked").each(function(){
        brandtopicarr.push($(this).val());
    });

    //MOBILE CONTENT------------------------------------------------------------

    //2. Radio Button which phone
    phoneid = $("input[name='phone']:checked").val();

    //3. Keywords Mobile Content 

    $("#topicmobile:checked").each(function(){
        topicmobilecontentArr.push($(this).val());
    });

    //4. Targeting

    //PAGES TARGETING 

    fbpage = $("input[name='fbpages']:checked").val();
    inpage = $("input[name='inpages']:checked").val();
    ytpage = $("input[name='ytpages']:checked").val();

    //CONTENT TARGETING

    fbcontent = $("input[name='fbcontent']:checked").val();
    incontent = $("input[name='incontent']:checked").val();
    ytcontent = $("input[name='ytcontent']:checked").val();

    //GOOGLE ADS SEARCH------------------------------------------------------------

    //5. Name

    namegooglesearch = $("#campaignnamesearch").val();

    //6. Keywords

    $("#searchkeywords:checked").each(function(){
        keywordsgglsrc.push($(this).val());
    });

    //7. Demographic

    $("#demographicsearch:checked").each(function(){
        demographicgglsrc.push($(this).val());
    });

    //8. Location

    locationgooglesearch = $("#locationsearch").val();
    
    //9. Schedule

    schedulegooglesearch = $("#schedulesearch").val();

    //10. Platform checkbox
    
    $("#devicessearch:checked").each(function(){
        platformgglsearch.push($(this).val());
    });

    //TEST GOOGLE SEARCH: 
    
    /** 
    console.log("NAME: " + namegooglesearch);
    console.log("KEYWORDS: " + keywordsgglsrc);
    console.log("DEMOGRAPHIC: " + demographicgglsrc);
    console.log("LOCATION: " + locationgooglesearch);
    console.log("SCHEDULE: " + schedulegooglesearch);
    console.log("PLATFORM: " + platformgglsearch);
    */

//GOOGLE ADS DISPLAY------------------------------------------------------------

//name
namegoogledisplay = $("#campaignnamedisplay").val();

//display keywords
$("#displaykeywords:checked").each(function(){
    keywordsggldisplay.push($(this).val());
});

//demographic display
$("#demographicdisplay:checked").each(function(){
    demographicggldisplay.push($(this).val());
});

//location
locationgoogledisplay = $("#locationdisplay").val();

//schedule display
schedulegoogledisplay = $("#scheduledisplay").val();

//platform google display
$("#devicesdisplay:checked").each(function(){
    platformggldisplay.push($(this).val());
});

//TEST GOOGLE DISPLAY: 
    
/** 
    console.log("NAME: " + namegoogledisplay);
    console.log("KEYWORDS: " + keywordsggldisplay);
    console.log("DEMOGRAPHIC: " + demographicggldisplay);
    console.log("LOCATION: " + locationgoogledisplay);
    console.log("SCHEDULE: " + schedulegoogledisplay);
    console.log("PLATFORM: " + platformggldisplay);
*/

//SOCIAL MEDIA PAGES------------------------------------------------------------

//16.FACEBOOK KEYWORDS
$("#fbpagekeywords:checked").each(function(){
    fbsmpages.push($(this).val());
});

//17.INSTAGRAM KEYWORDS
$("#inpagekeywords:checked").each(function(){
    instasmpages.push($(this).val());
});

//18.YOUTUBE KEYWORDS
$("#ytpagekeywords:checked").each(function(){
    ytsmpages.push($(this).val());
});

//TEST SM Pages

//console.log("Facebook Pages: " + fbsmpages);
//console.log("Instagram Pages: " + instasmpages);
//console.log("Youtube Pages: " + ytsmpages);

//TESTING EVERYTHING GETTING DATA OUT
console.log("Brand Topic: " + brandtopicarr);
console.log("Phone Select: " + phoneid);
console.log("Mobile Topic: " + topicmobilecontentArr);
console.log("Which Pages: " + fbpage + inpage + ytpage);
console.log("Which Content: " + fbcontent + incontent + ytcontent);
console.log("NAME: " + namegooglesearch);
console.log("KEYWORDS: " + keywordsgglsrc);
console.log("DEMOGRAPHIC: " + demographicgglsrc);
console.log("LOCATION: " + locationgooglesearch);
console.log("SCHEDULE: " + schedulegooglesearch);
console.log("PLATFORM: " + platformgglsearch);
console.log("-----------------------------");
console.log("NAME: " + namegoogledisplay);
console.log("KEYWORDS: " + keywordsggldisplay);
console.log("DEMOGRAPHIC: " + demographicggldisplay);
console.log("LOCATION: " + locationgoogledisplay);
console.log("SCHEDULE: " + schedulegoogledisplay);
console.log("PLATFORM: " + platformggldisplay);
console.log("Facebook Pages: " + fbsmpages);
console.log("Instagram Pages: " + instasmpages);
console.log("Youtube Pages: " + ytsmpages);

} //closing the method





