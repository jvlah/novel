//this is the picker for the post creation dropdowns (to select the mutlitple)
$('select').selectpicker;

/**
 * Function gets the data for the mobile content and stores it into the arrays. 
 */
function getDataMobileContent() {


    //selections are stores as an array. 
    let topicArr = [];
    let contentArr = [];
    let pagesSelector = [];
    
    $("#topicselector").each(function(){
        topicArr.push($(this).val());
    });

    $("#contentselector").each(function(){
        contentArr.push($(this).val());
    });

    $("#pagesselector").each(function(){
        pagesSelector.push($(this).val());
    });

    console.log(topicArr);
    console.log(contentArr);
    console.log(pagesSelector);

    if(document.getElementById('no').checked) {
        let noGoogle = document.getElementById('no').value;
        console.log(noGoogle);
    } else if(document.getElementById('yes').checked) {
        let yesGoogle = document.getElementById('yes').value;
        console.log(yesGoogle);
    }
    
}

/**
 * Function gets the data for the brand content
 */

function getDataBrandContent() {

    let topicbrandArr = [];

    $("#topicBrand").each(function(){
        topicbrandArr.push($(this).val());
    });

    console.log(topicbrandArr);


}


