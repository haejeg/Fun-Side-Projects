(function () {
    var trigId = document.getElementById("identity");
    var trigMethod;
	var trigCalc = document.getElementById("identityCalculator");
	if (trigCalc) {
		trigCalc.onsubmit = function () {
            var varConv = document.getElementById("varValue").value;
            switch (Number(trigId.value)) {
                case 1: trigMethod = Math.sin(varConv); break;
                case 2: trigMethod = Math.cos(varConv); break;
                case 3: trigMethod = Math.tan(varConv); break;
                case 4: trigMethod = 1/Math.cos(varConv); break;
                case 5: trigMethod = 1/Math.sin(varConv); break;
                case 6: trigMethod = 1/Math.tan(varConv); break;
            }
            
			this.output.value = trigMethod;
			return false;
		};
	}
}());