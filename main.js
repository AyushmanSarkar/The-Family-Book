var image = document.getElementById("IMG");
    var counter = 0;
    var imgArray = [
        "father.jpg",
        "mother.jpg",
        "grandfather.jpg",
        "grandmother.jpg",
    ];
    var txtArray = [
        "Debdeep Sarkar",
        "Anusree Ray",
        "Ajay Ray",
        "Rekha Ray",
    ];
    function Update() {
        document.getElementById("TEXT").style.display="inline-block";
      counter += 1;
      if (counter > imgArray.length -1) {
        counter = 0;
      }
      document.getElementById("IMG").src=imgArray[counter];
      document.getElementById("TEXT").innerHTML=txtArray[counter];
    }
