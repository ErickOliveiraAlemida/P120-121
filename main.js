function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", modelLoad())
}

function draw (){
  image(video, 0, 0, 300, 300)
  classifier.classify(video, gotResult)
}

function modelLoad(){
  console.log(("modelo carregado"))
}

previsao = ""

function gotResult(error,results){
  if (error){
    console.error(error)
  }else{
    console.log(results)
    if ((results[0].confidence > 0.5)&& (previsao != results[0].label)){
      previsao = results[0].label
      document.getElementById("resultObjectName").innerHTML = results[0].label
      document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(2)
    }
  }
}


