(function($){
	$(window).load(function() {
		"use strict";
		if ($.fn.blueberry) {
			$('#slider-img').blueberry();
		};
	});
	$(document).ready(function(){
		"use strict";
		// add calendar
		$(".datepicker").datepicker({
			minDate: "0",
			dateFormat: "dd/mm/yy"      
		});
		$("body").click( function( event ) {		
			if ( $(event.target).parent().closest(".ui-datepicker-header").length !== 0 || $(event.target).hasClass("datepicker") === true ) {
				//
			} else {
				$(".datepicker").datepicker('hide',0);
			}
		});
		// to switch between the tabs for the main form
		$(".title-form").click(function() {
			var this_id = $(this).attr('id');
			$(this).parents('form').filter(':first').children('.main_form_navigation').children('.title-form').addClass('back').removeClass('current');
			$(this).addClass("current").removeClass('back');
			$(this).parents('form').filter(':first').children(".content-form").addClass("hidden");
			$("#"+this_id+"_content").removeClass('hidden');			
		});
		/* add placeholder in ie */
		if ( $.browser.msie && $.fn.placeholder ) {
			$('.location, #sign_up_name, #sign_up_email, .form_element input, .shortcode_input, .input_placeholder').placeholder();
		}
		// custom select 
		$(".select").selectbox();
		$(".select:disabled").selectbox("disable");

		// custom slider 
		$(".price_range").slider({
		  from: 0,
		  to: 1500,
		  step: 50,
		  dimension: '&nbsp;$'
		});
		$(".passangers_range").slider({
		  from: 1,
		  to: 5,
		  step: 1,
		  dimension: ''
		});
		$(".shortcode_range").slider({
		  to: 5,
		  step: 1,
		  dimension: ''
		});

		// hide/show 'more details'
		$(".details-more").css('display','none');
		$(".view-details").click(function(){
			$(this).css('display','none');
			$(this).closest('.main-block').find('.close-details').css('display','block');
			$(this).closest('.main-block').find('.details-more').css('display','block');
		});
		$(".close-details").click(function(){
			$(this).css('display','none');
			$(this).closest('.main-block').find('.view-details').css('display','block');
			$(this).closest('.main-block').find('.details-more').css('display','none');
		});
		$(".details div").hover(function(){
			$(this).css('color','#EE7835');
		},function(){
			$(this).css('color','#378EEF');
		});

		// hide/show another block 
		$(".moreInfoText").css('display','none');
		$(".moreInfoClose").css('display','none');
		$(".moreInfoOpen").click(function(){
			$(this).css('display','none');
			$(this).closest('.moreInfo').find('.moreInfoClose').css('display','block');
			$(this).closest('.moreInfo').find('.moreInfoText').css('display','block');
		});
		$(".moreInfoClose").click(function(){
			$(this).css('display','none');
			$(this).closest('.moreInfo').find('.moreInfoOpen').css('display','block');
			$(this).closest('.moreInfo').find('.moreInfoText').css('display','none');
		});
		$(".moreInfo div").hover(function(){
			$(this).css('color','#EE7835');
		},function(){
			$(this).css('color','#378EEF');
		});

		// change overlay block height for register/sign_in/reset_password pages
		$("#overlay_block").css('height', $(document).height() );
		$(".admin-form-content").click(function(event){
			if ($(event.target).closest(".admin-form-block").length) return;
		    $("#overlay_block").css('display','none');
			$(".admin-form-content").css('display','none');
		    event.stopPropagation();						
		});
		// to switch between the tabs for the sign_in/register form
		var anc = window.location.hash.replace("#","");
		if( anc != "" ){
			Display_tab_div( anc );
		}
		$(".tab_link_button").click(function(){
			$("#overlay_block").css('display','block');
			var this_id = $(this).parent('span').attr('class').toLowerCase().replace(' ','_');
			if ( this_id == 'forgot_passwd' ) {
				$(".admin-form-content").css('display','none');
				$(".forgot_passwd_block").css('display','block');
			} else {
				$(".admin-form-content").css('display','none');
				$(".sign_register_block").css('display','block');				
			}
			$('.admin-form-block .title-form').addClass('back').removeClass('current');
			$(".admin-form-block .main_form_navigation #tab_"+this_id).addClass("current").removeClass('back');
			$('.admin-form-block .content-form').addClass("hidden");
			$('.admin-form-block #tab_'+this_id+"_content").removeClass('hidden');	
		});

		// add mask for time input
		if ($.fn.setMask) {
			$(".time-select").setMask("29:59").keypress(function() {
				var currentMask = $(this).data('mask').mask;
				var newMask = $(this).val().match(/^2.*/) ? "23:59" : "29:59";
				if (newMask != currentMask) {
					$(this).setMask(newMask);
				}
			});
		};		

		// navigation for faq page
		$(".faq_nav li").click(function(){
			$(".faq_nav li").removeClass('current');
			$(this).addClass('current');
		});

		// change sorting for the "choose-car" page and reloading content
		$(".widget-title-sort a").click(function(){
			$(".widget-title-sort a").removeClass('current');
			$(this).addClass('current');
			$(".content-overlay").css('display','block').css('height', $('.product-widget > form').height() ).css('width', $('.product-widget > form').width() );
			$(".content-overlay > img").css('display','block').css('margin-top', $('.product-widget > form').height()/2-33 ).css('margin-left', $('.product-widget > form').width()/2-33 );
			setTimeout(function () {
				$(".main-widget .close-details").css('display','none');
				$('.main-widget .view-details').css('display','block');
				$('.main-widget .details-more').css('display','none');
			    $(".content-overlay").css('display','none');
			}, 400);
		});

		// location checkbox - add block "Return location"
		$('.content-form .return_location').css('display','none');
		$("#location-checkbox, #location-checkbox-1").change( function() {
			if ( $(this).is(':checked') ) {
				$('.return_location').css('display','block');
			} else {
				$('.return_location').css('display','none');
			}
		});
		$("span.checkbox").live( 'click',function() {
			if ( $(this).next('input[type="checkbox"]').attr('id') == 'location-checkbox' || $(this).next('input[type="checkbox"]').attr('id') == 'location-checkbox-1' ) {
				if ( $(this).next('input[type="checkbox"]').is(':checked') ) {
					$('.return_location').css('display','block');
				} else {
					$('.return_location').css('display','none');
				}
			}	
		});

		// pagination and reloading content
		$('.pagination div').click(function(){
			$('.pagination div').removeClass('current');
			$(".content-overlay").css('display','block').css('height', $('.product-widget > form').height() ).css('width', $('.product-widget > form').width() );
			$(".content-overlay > img").css('display','block').css('margin-top', $('.product-widget > form').height()/2-33 ).css('margin-left', $('.product-widget > form').width()/2-33 );
			if ( $(this).hasClass('left') || $(this).hasClass('right') ) {
				if ( $(this).hasClass('left') ) {
					$(this).next('div').addClass('current');
				} else {
					$(this).prev('div').addClass('current');
				}
			}else{				
				$(this).addClass('current');
			}
			setTimeout(function () {
				$(".main-widget .close-details").css('display','none');
				$('.main-widget .view-details').css('display','block');
				$('.main-widget .details-more').css('display','none');
			    $(".content-overlay").css('display','none');
			}, 400);
		});
	});
		

		$( ".step1" ).click(function() {
			$( "#conteiner4" ).fadeOut("fast");
			$( "#conteiner3" ).fadeOut("fast");
			$( "#conteiner2" ).fadeOut("fast");
			$( "#conteiner1" ).fadeIn("slow");
		});

		$( ".step2, .continue1" ).click(function() {

			$( "#ErrorNoDates").fadeOut("fast")
			if($("input[name='data_from']").val() == "" || $("input[name='data_to']").val() == "")
			{
				$( "#ErrorNoDates").fadeIn("fast")
                mixpanel.track("Date_error");
				return(0);
			}

			if(!($("#location-checkbox").is(':checked')))
			{
				document.getElementById('returnPlace').options[document.getElementById('locationPlace').options.selectedIndex].selected = true

			}

			$( "#conteiner4" ).fadeOut("fast");
			$( "#conteiner3" ).fadeOut("fast");
			$( "#conteiner1" ).fadeOut("fast");
			$( "#conteiner2" ).fadeIn("slow");

			locationPlace = $('#locationPlace').attr('sb');
			locationPlace = '#sbSelector_' + locationPlace;
			locationPlace = $( locationPlace ).html();

			datalocationprice = $('#locationPlace option:selected').data('locationPrice');
			$('#locationVal').val(locationPlace);
			$('#locationPlaceVal').val(datalocationprice);

			returnPlace = $('#returnPlace').attr('sb');
			returnPlace = '#sbSelector_' + returnPlace;
			returnPlace = $( returnPlace ).html();
			returnPlace = document.getElementById('returnPlace').options[document.getElementById('returnPlace').options.selectedIndex].label
			$('#returnVal').val(returnPlace);

			pickloc = $('#locationVal').val();
			returnloc = $('#returnVal').val();

			$('.pickandreturn').html(pickloc + ' / ' + returnloc);

			datareturnplace = $('#returnPlace option:selected').data('returnLocationPrice');
			$('#returnPlaceVal').val(datareturnplace);

			data_from = $("input[name='data_from']").val();
			data_to = $("input[name='data_to']").val();

			selectPickTime = $('.selectPickTime').attr('sb');
			selectPickTime = '#sbSelector_' + selectPickTime;
			selectPickTime = $( selectPickTime ).html();

			selectReturnTime = $('.selectReturnTime').attr('sb');
			selectReturnTime = '#sbSelector_' + selectReturnTime;
			selectReturnTime = $( selectReturnTime ).html();

			$('#datafromVal').val('date: ' + data_from + ' time: ' + selectPickTime);
			$('#datatoVal').val('date: ' + data_to + ' time: ' + selectReturnTime);

			$('.picktime').html(data_from + ', ' + selectPickTime );
			$('.returntime').html(data_to + ', ' + selectReturnTime ); 

			var date_1 = new Date(parseInt(data_to.substr(6, 4), 10), parseInt(data_to.substr(3, 2), 10) - 1, parseInt(data_to.substr(0, 2), 10), parseInt(selectReturnTime.substr(0,2))); 
			var date_2 = new Date(parseInt(data_from.substr(6, 4), 10), parseInt(data_from.substr(3, 2), 10) - 1, parseInt(data_from.substr(0, 2), 10), parseInt(selectPickTime.substr(0,2))); 

			rentdays = Math.ceil((date_1-date_2)/86400000);
			
			if (rentdays < 1)
				{
					rentdays = 1
				}
			$('#rentdaysVal').val(rentdays);
          
          	mixpanel.register({
              "location_pickup" : pickloc,
              "location_pickup_price" : datalocationprice,
              "location_return" : returnloc,
              "location_return_price" : datareturnplace,
              "date_pickup" : date_1,
              "date_return" : date_2,
              "date_pickup_text" : data_from,
              "date_return_text" : data_to,
              "rentdays" : rentdays,
              "time_pickup" : selectPickTime,
              "time_return" : selectReturnTime,
              "singe_location" : $("#location-checkbox").is(':checked')
            });
          	mixpanel.track("Step1");

			/* inserting car prices according to number of days for rent */
          	var carBlockNum;
			for (carBlockNum = 0; carBlockNum < document.getElementsByClassName("continue2").length; carBlockNum++)
			{
				carPriceArr = document.getElementsByClassName("continue2")[carBlockNum].getAttribute('data-car-dayprice')
				carPriceArr = '{ ' + carPriceArr + ' }';
				rentdays = $('#rentdaysVal').val();

				array = $.parseJSON(carPriceArr);

				for (var i in array)
				{
					if (parseInt(i, 10) <= rentdays)
					{
						cost = parseInt(array[i], 10)*rentdays;
						carPrice = parseInt(array[i], 10);
					}
				}

				if (!window.location.href.match("/en/"))
					{
					document.getElementsByClassName("CarDayPrice")[carBlockNum].innerHTML = carPrice + "&euro;/день";
					}
				else
					{
					document.getElementsByClassName("CarDayPrice")[carBlockNum].innerHTML = carPrice + "&euro;/day";
					}
			}

			/*
			carPriceArr = $(" .continue2").data('carDayprice');
			carPriceArr = '{ ' + carPriceArr + ' }';
			rentdays = $('#rentdaysVal').val();

			array = $.parseJSON(carPriceArr);

			for (var i in array)
				{
					if (parseInt(i, 10) <= rentdays)
					{
						cost = parseInt(array[i], 10)*rentdays;
						carPrice = parseInt(array[i], 10);
					}
				}

			if (!window.location.href.match("/en/"))
				{
				$("#conteiner2 .post .additional-block .CarDayPrice").html(carPrice + "&euro;/день");
				}
			else
				{
				$("#conteiner2 .post .additional-block .CarDayPrice").html(carPrice + "&euro;/day");
				}
			*/

		});

/*		$( ".step3" ).click(function() 
		{
			$( "#conteiner4" ).fadeOut("fast");
			$( "#conteiner2" ).fadeOut("fast");
			$( "#conteiner1" ).fadeOut("fast");
			$( "#conteiner3" ).fadeIn("slow");
		});
		
		$( ".step4" ).click(function() {
			$( "#conteiner3" ).fadeOut("fast");
			$( "#conteiner2" ).fadeOut("fast");
			$( "#conteiner1" ).fadeOut("fast");
			$( "#conteiner4" ).fadeIn("slow");
		}); */

	 	$( "#conteiner2 .post" ).click(function() {
			$(".copyCarTo .carTitle").html( $(this).find('.carTitle').html() );
			$(".copyCarTo .product-img").html( $(this).find('.product-img').html() );
			$(".copyCarTo .features").html( $(this).find('.features').html() );
			$(".copyCarTo .details-more").html( $(this).find('.details-more').html() );
			$('#carname').val($(this).find('.carTitle').html());

          	carName = $('#carname').val();        	

          	mixpanel.register({
              "car_cost" : cost,
              "car_name" : carName,
              "car_price" : carPrice
            });
          	mixpanel.track("Step2");

          	if (carName == "Nissan Juke" || carName == "Daihatsu Terios" || carName == "Opel Vivaro") {
				$( ".continue3" ).click();
			}
		});

		$( ".continue2" ).click(function() {
			carPrice = $(this).data('carDayprice');
			carPrice = '{ ' + carPrice + ' }';
			rentdays = $('#rentdaysVal').val();

			array = $.parseJSON(carPrice);

			for (var i in array)
				if (parseInt(i, 10) <= rentdays)
				{
					cost = parseInt(array[i], 10)*rentdays;
					carPrice = parseInt(array[i], 10);
				}
			
			$('#carPriceVal').val(carPrice);

			datalocationprice = $('#locationPlaceVal').val();
			datareturnplace = $('#returnPlaceVal').val();
			cost = parseInt(cost, 10) + parseInt(datareturnplace, 10) + parseInt(datalocationprice, 10);
			$('#totalprice').val(cost + ' &euro;');
			$('.price').html(cost + ' &euro;');
			$('.totalprice').html(cost + ' &euro;');
          
			$( "#conteiner4" ).fadeOut("fast");
			$( "#conteiner2" ).fadeOut("fast");
			$( "#conteiner1" ).fadeOut("fast");
			$( "#conteiner3" ).fadeIn("slow");
			$("html, body").animate({ scrollTop: 0 }, "slow");
		});

		$( ".continue3" ).click(function() {
			carPrice = $('#carPriceVal').val();
			rentdays = $('#rentdaysVal').val();
			cost = carPrice*rentdays;
			datalocationprice = $('#locationPlaceVal').val();
			datareturnplace = $('#returnPlaceVal').val();
			extrapricecurrentVal = $('#extrapriceVal').val();
			cost = parseInt(cost, 10) + parseInt(datareturnplace, 10) + parseInt(datalocationprice, 10);
			//cost = parseInt(cost, 10) + parseInt(extrapricecurrentVal, 10);
			$('.price').html(cost  + ' &euro;');
			
			mixpanel.track("Step3");
          
			$( "#conteiner3" ).fadeOut("fast");
			$( "#conteiner2" ).fadeOut("fast");
			$( "#conteiner1" ).fadeOut("fast");
			$( "#conteiner4" ).fadeIn("slow");
			$("html, body").animate({ scrollTop: 0 }, "slow");
		});
		$( "#conteiner3 .post" ).click(function() {
				rentdays = $('#rentdaysVal').val();
				$('#extrapriceVal').val('0');
			$(".widget-extras").html('');
			$("#extraval").val('');
			$( "#conteiner3 .post" ).each(function() {
			if ($(this).find('.styled').attr( "checked") == "checked"){	
			extradayprice = $(this).find('.styled').data('extraDayprice');
			extraonceprice = $(this).find('.styled').data('extraOnceprice');

			selectExtra = $(this).find('.selectExtra').attr('sb');
			selectExtra = '#sbSelector_' + selectExtra;
			selectExtra = $( selectExtra ).html();
			selectExtra = parseInt(selectExtra, 10);
			if (isNaN(selectExtra)){
			extrapriceVal = extradayprice * rentdays + extraonceprice;
			} else {
			extrapriceVal = extradayprice * rentdays * selectExtra + extraonceprice * selectExtra;
			}

			extrapricecurrentVal = $('#extrapriceVal').val();
			extrapricecurrentVal = parseInt(extrapricecurrentVal, 10) + parseInt(extrapriceVal, 10);
			$('#extrapriceVal').val(extrapricecurrentVal);

			extraTitle = $(this).find('.extraTitle').html();
			extraTitle = '<p>' + extraTitle + '  <span class="price_extra">' + parseInt(extrapriceVal, 10) +' &euro; </span></p>';
			extras = $(".widget-extras").html();
			extras = extras + extraTitle;
			$(".widget-extras").html(extras);

			extraval = $("#extraval").val();
			extracurval = $(this).find('.extraTitle').html();
			extraval = extraval + ' / ' + extracurval;
			$("#extraval").val(extraval);
			}
			carPrice = $('#carPriceVal').val();
			rentdays = $('#rentdaysVal').val();
			cost = carPrice*rentdays;
			datalocationprice = $('#locationPlaceVal').val();
			datareturnplace = $('#returnPlaceVal').val();
			extrapricecurrentVal = $('#extrapriceVal').val();
			cost = parseInt(cost, 10) + parseInt(datareturnplace, 10) + parseInt(datalocationprice, 10);
			costTotal = parseInt(cost, 10) + parseInt(extrapricecurrentVal, 10);
           
			$('.price').html(cost + ' &euro;');
			$('.totalprice').html(costTotal + ' &euro;');
			$('#totalprice').val(costTotal + ' &euro;');
			});
		});
	
		$( ".booknow" ).click(function() {

			$( "#ErrorFinalSubmit").fadeOut("fast")		  
			if ($('#Bookcheckbox').attr( "checked") == "checked")
				{	
				email = $('#customeremail').val();
				phone = $('#customerphone').val();
		
				if (phone != '' || email != '')
					{	
					name = $('#customername').val();
					comment = $('#customercomment').val();
					carname = $('#carname').val();
					carPrice = $('#carPriceVal').val();
					rentdays = $('#rentdaysVal').val();
					datalocationplace = $('#locationVal').val();
					datareturnplace = $('#returnVal').val();
					datafromVal = $('#datafromVal').val();
					datatoVal = $('#datatoVal').val();
					totalprice = $('#totalprice').val();
					extraval = $("#extraval").val();
					$.post(
	  					"/formsend.php",
						 {
						    name: name,
						    phone: phone,
						    email: email,
						    comment: comment,
						    carname: carname,
						    carPrice: carPrice,
						    rentdays: rentdays,
						    datalocationplace: datalocationplace,
						    datareturnplace: datareturnplace,
						    datafromVal: datafromVal,
						    datatoVal: datatoVal,
						    extraval: extraval,
						    totalprice: totalprice
						 }
					);
					document.getElementsByClassName("booknow")[0].style.opacity=0.3
					$( ".booknow" ).prop( "disabled", true );
					$("html, body").animate({ scrollTop: 0 }, "slow");
					$( "#SuccessFinalSubmit").fadeIn("slow")
                    
                    mixpanel.register({
                      "name" : name,
                      "phone" : phone,
                      "email" : email,
                      "comment" : comment,
                      "carname" : carname,
                      "carPrice" : carPrice,
                      "rentdays" : rentdays,
                      "datalocationplace" : datalocationplace,
                      "datareturnplace" : datareturnplace,
                      "datafromVal" : datafromVal,
                      "datatoVal" : datatoVal,
                      "extraval" : extraval,
                      "totalprice" : totalprice
            
            		});
					mixpanel.track("Step4");
					//alert('Thank you, your booking was submitted successfully!');
					if (!window.location.href.match("/en/"))
						{
						setTimeout(function() { location.href = "/index.html"; }, 3000);
						}
					else
						{
						setTimeout(function() { location.href = "/en/index.html"; }, 3000);
						}
					}
				else
					{
					if (!window.location.href.match("/en/"))
						{
						document.getElementById('ErrorFinalSubmit').innerHTML = "Пожалуйста, укажите телефон или email.";
						}
					else
						{
						document.getElementById('ErrorFinalSubmit').innerHTML = "Please specify either phone or email.";
						}
					$( "#ErrorFinalSubmit").fadeIn("fast")
                    mixpanel.track("ErroeNoMailOrPhone");
					//alert ('please, type name and phone!');
					}	
			}
			else
				{
				if (!window.location.href.match("/en/"))
					{
					document.getElementById('ErrorFinalSubmit').innerHTML = "Пожалуйста, согласитесь с условиями бронирования.";
					}
				else
					{
					document.getElementById('ErrorFinalSubmit').innerHTML = "Please, agree with terms of service.";
					}
				$( "#ErrorFinalSubmit").fadeIn("fast")
                mixpanel.track("ErrorTOS");
				//alert ('please, agree terms of service!');
				}
		});	
	
	$( ".price-button-container").click(function() 
		{
		if (!window.location.href.match("/en/"))
					{
					location.href = "/index.html";
					}
				else
					{
					location.href = "/en/index.html";
					}
		});

	$( ".backcallsend" ).click(function() {
		name = $('#backcallname').val();
		phone = $('#backcallphone').val();					  
		if (phone != '' && name != ''){	
			$.post(
		  "/backcall.php",
		  {
		    name: name,
		    phone: phone
		  }
		);
		alert('your massage has successfully send! We ll call you as soon as it possible!');
		location.href = "avto/index.html";
		}else{
			alert ('please, type your name and phone!');
		}
			});	
})(jQuery);

function Display_tab_div(name){
	(function($){
		"use strict";
		$(".admin-form .title-form").addClass('back').removeClass('current');
		$(".admin-form #tab_"+name).addClass("current").removeClass('back');
		$(".admin-form .content-form").addClass("hidden");
		$(".admin-form #tab_"+name+"_content").removeClass('hidden');
	})(jQuery);
}