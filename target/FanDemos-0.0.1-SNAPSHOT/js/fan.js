var speed = 0;

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

function increaseSpeed(){
	getJSON('./api/fancontrol/increase/' + speed,
			function(err, data) {
			  if (err !== null) {
			    alert('Something went wrong: ' + err);
			  } else {
				  if (data == "0"){
					  document.querySelector(".fan__blades").style.animation = "spin infinite 0s linear forwards";  
				  }else{
					  document.querySelector(".fan__blades").style.animation = "spin infinite " +  (4 - data)  + "s linear forwards";
				  }
				  speed = data;
			  }
			});
}

function decreaseSpeed(){
	// document.getElementById("jack").classList.add('speed2');
	getJSON('./api/fancontrol/decrease/' + speed,
			function(err, data) {
			  if (err !== null) {
			    alert('Something went wrong: ' + err);
			  } else {
				  if (data == "0"){
					  document.querySelector(".fan__blades").style.animation = "spin infinite 0s linear forwards";  
				  }else{
					  document.querySelector(".fan__blades").style.animation = "spin infinite " +  (4-data) + "s linear forwards";
				  }
				  speed = data;
			  }
			});
	
}

function reset(){
	document.querySelector(".fan__blades").style.animation = "spin infinite 0ms linear forwards";
}