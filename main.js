dog = 0;
cat = 0;

function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Ub4iZ3i9u/model.json", modelLoaded);
    }

    function modelLoaded()
{
    console.log("model loaded");
    classifier.classify(getResults);
}

function getResults(error, results)
{
    if (error)
    {
        console.error(error);
    }

    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_name").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_name").style.color =   "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        


        if (results[0].label == "Cat")
        {
            cat = cat + 1;
            document.getElementById("aliens1").src = "cat.png";
            document.getElementById("detected-counts").innerHTML = "Dog detected-" + dog + " Cat detected-" + cat;

        }
        else  if (results[0].label == "Dog")
        {
            dog = dog + 1;
            document.getElementById("aliens1").src = "dog.png";
            document.getElementById("detected-counts").innerHTML = "Dog detected-" + dog + " Cat detected-" + cat;
        }
    }
}