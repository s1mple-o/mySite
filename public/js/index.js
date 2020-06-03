$(function(){
	var count =1;
	var objp1 =$("#myname");
	var objp2 =$("#myintroduce");
	var objimg=$(".me>a>img");
	var objbrief=$("#briefintroduce");
    $('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fivethPage', 'sixthPage','lastPage'],
		menu:'#nav-in',

		onLeave : function(index, nextIndex, direction){
			if(index==1){
				$(".navbar").css("padding-top","13px").css("background-color","#333");
				$("#nav-r").css("top","23px");
			}
			if(nextIndex==1){
				$(".navbar").css("padding-top","40px").css("background-color","transparent");
				$("#nav-r").css("top","50px");
			}
			if(nextIndex==2){
				if(count<=1){
					count++;
					selfAnimate(objp1,objp2,objimg,objbrief);
				}
				
			}
			if(nextIndex==3){
				if (count<=2) {
					count++;
					var chart = Highcharts.chart('container', {
							chart: {
								type: 'bar',
							},
							title: {
								text: '各技能掌握情况'
							},
							subtitle: {
								text: 'yeweitao.xyz'
							},
							xAxis: {
								categories: ['HTML', 'CSS', 'JavaScript', 'BootStrap','PHP', 'Java'],
								title: {
									text: null
								}
							},
							yAxis: {
								min: 0,
								max :100,
								title: {
									text: '%',
								},
								labels: {
									overflow: 'justify'
								}
							},
							tooltip: {
								valueSuffix: ' %'
							},
							plotOptions: {
								bar: {
									dataLabels: {
										enabled: true,
										allowOverlap: true // 允许数据标签重叠
									}
								}
							},
							series: [{
								name:"range",
								data: [70, 66,64, 65,20,20]
							}]
					});
				}
			}
		}

	})
	//methods
	$.fn.fullpage.setAllowScrolling(true);
	function indexShow(){
			$($(".motto").children()[0]).fadeIn(2000,"linear",function(){
				$($(".motto").children()[1]).fadeIn(2000,"linear",function(){
					$($(".motto").children()[2]).fadeIn(2000,"linear",function(){
						$($(".motto").children()[3]).fadeIn(2000,"linear")
					})
				})	
		});
	}
	indexShow();
	
	// var lichildren =objbrief.children();
	
	// objp.css({"display":"none","top":"335px","left":"335px","font-size":"5px"})
	// 复原自我介绍动画函数对象参数函数
	function selfClear(objp1,objp2,objimg,objbrief){
		objp1.css({"opacity":"0","top":"335px","left":"335px","font-size":"5px"});
		objp2.css({"opacity":"0","top":"335px","left":"335px","font-size":"5px"});
		objimg.css({"opacity":"0","width":"80px","height":"80px","top":"220px","left":"700px"})
		objbrief.css({"opacity":"0","top":"130px","right":"666px"});
	}
	// 显示自我介绍动画函数
	function selfAnimate(objp1,objp2,objimg,objbrief){
		
		 // 获取数据
		var lichildren =objbrief.children();
		// var liobj = new Array(lichildren.length);
		// for(var i=0;i<lichildren.length;i++){
		// 	liobj [i]=$(lichildren[i]);
		// 	console.log(liobj);
		// }
		getSelf(lichildren);
		// end
		
		objp1.stop().animate({"opacity":"1","font-size":"80px"},3000,"easeOutElastic",function(){
			objp1.animate({"top":"505px","left":"195px","font-size":"40px"},1000,"linear",function(){
				objp2.stop().slideDown(2000,"linear");
				objp2.stop().slideUp(2000,"linear",function(){
					objimg.stop().animate({"opacity":"1","width":"400px","height":"400px"},3000,"easeOutQuart",function(){
							objimg.stop().animate({"top":"148px","left":"500px","width":"200px","height":"200px"},1000,"linear",function(){
								objimg.stop().animate({"top":"100px","left":"200px","width":"400px","height":"400px"},1000,"linear",function(){
									objbrief.stop().slideDown(2000,"linear",function(){
										// 添加数据
										$("li[data-college]").append("<i>"+liobj[0].data("college")+"</i>");
										$("li[data-major]").append("<i>"+liobj[1].data("major")+"</i>");
										$("li[data-age]").append("<i>"+liobj[2].data("age")+"</i>");
										$("li[data-skill]").append("<i>"+liobj[3].data("skill")+"</i>");
										// end
									});
									
								});
							});
					});
				});
			});
		});
		// console.log('test');
	}
	// 获取个人资料数据函数

	function getSelf(element){
		liobj = new Array();
		for(var i=0;i<element.length;i++){
			liobj [i]=$(element[i]);
		}
	}
	 // page6 star
	 $(".content-1").on("click",function(){
	 	$(this).parent();
	 	
	 })
	 // page6 end
	// page7 js star
	$("#name").on("focus",function(){
		console.log('test');
		$(".f-name").css("display","none");
	});
	$("#email").on("focus",function(){
		console.log('test');
		$(".f-email").css("display","none");
	});
	$("#text").on("focus",function(){
		console.log('test');
		$(".f-text").css("display","none");
	});
	$("#name").on("blur",function(){
		console.log('test');
		$(".f-name").css("display","block");
	});
	$("#email").on("blur",function(){
		console.log('test');
		$(".f-email").css("display","block");
	});
	$("#text").on("blur",function(){
		console.log('test');
		$(".f-text").css("display","block");
	});
	// page7 js end
});