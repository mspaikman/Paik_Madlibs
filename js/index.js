window.onload = function() {
  //check that js is working
  console.log("reading js");

  //capture the submit event
  document.f.onsubmit = processForm;

  //capture the reset event
  document.f.onreset = resetPage;

  //define process function
  function processForm() {

    //store user name in a variable
    var nameofrecipient = document.f.nameofrecipient.value;
	  
	  
    //store user color in a variable
    var adjective = document.f.adjective.value;
	  
	    var verb = document.f.verb.value;
	  
	     var anotherverb = document.f.anotherverb.value;
	  
	   var location = document.f.location.value;

	    var anotheradjective = document.f.anotheradjective.value;
	  
	    var beverage = document.f.beverage.value;
	  
	   var food = document.f.food.value;
	  
	   var lastadjective = document.f.lastadjective.value;
	  
	  var yourname = document.f.yourname.value;
	  
	  
	  
    //error detection
    if (nameofrecipient == "" || adjective == ""|| verb == ""|| anotherverb == ""|| location == ""|| anotheradjective == ""|| beverage == ""|| food ==""|| lastadjective==""|| yourname=="") {
      alert("fill out the form!");

    } else {

      //capture the msg element to change it's text and html
      var myMsg = document.getElementById("myMsg");

      myMsg.innerHTML =
		  "<p> Hi <em> " + nameofrecipient +
		   "</p><p></em>I'm having a <em>" + adjective + "</em> time in San Diego right now.</p><p>I've been spending my time <em>" + verb + "</em> and <em>" + anotherverb +"</em> at the <em>" + location + "</p><p></em>. The beach is so <em>" + anotheradjective + "</em> and I really wish you were here with me drinking <em>" + beverage + "</em> and eating <em>" + food +  "</p><p></em> Your <em>" + lastadjective + "</em> friend <em></p><p>" + yourname +"</em></p>";
      myMsg.className = "show";
    }

    //prevent page from reloading
    return false;
  }

  //if user chooses "reset"
  function resetPage() {
    //remove any text from myMsg
    myMsg.innerHTML = "";
    //change the class name
    myMsg.className = "hide";
    //reset the userName field
    nameofrecipient.value = "";
    //reset the userColor field
    adjective.value = "";
verb.value = "";
	  anotherverb.value = "";
	    anotherverb.location = "";
	  anotheradjective.location = "";
	  beverage.location = "";
	    food.location = "";
	  lastadjective.location = "";
	  yourname.location = "";
    return false;
  }
}