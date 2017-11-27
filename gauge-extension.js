define( ["qlik", "text!./gauge-extension.ng.html", "css!./gauge-extension.css"],
	function ( qlik, template ) {
		"use strict";
		return {
			template: template,
			initialProperties: {
				qHyperCubeDef: {
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [{
						qWidth: 50,
						qHeight: 50
					}]
				}
			},
			definition: {
				type: "items",
				component: "accordion",
				items: {
					measures: {
						uses: "measures",
						min: 1,
						max: 1
					},
					appearance: {
						uses: "settings",
					}
				}
			},
			paint: function () {
			    var $scope = this.$scope;
				$scope.value = Math.round($scope.layout.qHyperCube.qDataPages[0].qMatrix[0][0].qNum * 100) / 100;
				$scope.measurement = $scope.coverage * 2.7;
				
				var elements = $(".g-background");
				for (var elem in elements) {
					if(elements[elem].offsetHeight < 250 || elements[elem].offsetWidth < 250){
						elements[elem].className = "";
						elements[elem].classList.add("g-background", "less-than-250");
					} else if (elements[elem].offsetHeight < 340 || elements[elem].offsetWidth < 340){
						elements[elem].className = "";
						elements[elem].classList.add("g-background", "less-than-340");
					} else if (elements[elem].offsetHeight > 500 || elements[elem].offsetWidth > 500){
						elements[elem].className = "";
						elements[elem].classList.add("g-background", "less-than-500");
					} else {
						elements[elem].className = "";
						elements[elem].classList.add("g-background");
					}
				}
			
				return qlik.Promise.resolve();
			}
		};

	} );
