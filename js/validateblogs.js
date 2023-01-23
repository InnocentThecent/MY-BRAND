var titleerror=document.getElementById("titleerror");
var authorerror=document.getElementById("authorerror");
var descriptionerror=document.getElementById("descriptionerror");


function validateTitle(){
    var name=document.getElementById('title').value;
    if(name.length == 0){
        titleerror.innerHTML = 'Title is required';
        return false;
    }
    
    titleerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateAuthor(){
    var name=document.getElementById('author').value;
    if(name.length == 0){
        authorerror.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        authorerror.innerHTML = 'Write both names';
        return false;
    }
    authorerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateDescription(){
    var name=document.getElementById('blogcontent').value;
    if(summernote.length == 0){
        descriptionerror.innerHTML = 'Description is required';
        return false;
    }
    if(summernote.length<10){
        descriptionerror.innerHTML = 'Provides more characters';
        return false;
    }
    descriptionerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
  
function validateForm(){
    if(!validateTitle() || !validateDescription()){
        descriptionerror.innerHTML = 'Please fill all before press Submit button';
        setTimeout(function(){ descriptionerror.style.display = 'none';}, 4100);
        return false;
    }
}