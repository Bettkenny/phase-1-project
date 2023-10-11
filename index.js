document.addEventListener("DOMContentLoaded", function(){
    const imageInput = document.getElementById("imageInput");
    const memeImage = document.getElementById("memeImage");
    const topText = document.getElementById("topText");
    const bottomText = document.getElementById("bottomText");
    const topTextInput = document.getElementById("topTextInput");
    const bottomTextInput = document.getElementById("bottomTextInput");
    const generateMeme = document.getElementById("generateMeme");
    const saveMeme = document.getElementById("saveMeme");
    let memeData ={
        image: "",
        topText: "",
        bottomText: "",
    };
    generateMeme.addEventListener("click",function(){
        memeData.topText =  topTextInput.value;
        memeData.bottomText=    bottomTextInput.value;
    });
    saveMeme.addEventListener("click", function(){
        fetch("db.json",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(memeData),
        })
        .then(response => response.json())
        .then(data =>{
            console.log("Meme saved:", data);
            alert("Meme saved successfully!");
        })
        .catch(error =>{
            console.error("Fecth error", error);
            alert("Error saving meme. Please try again later.")
        })
    })
})