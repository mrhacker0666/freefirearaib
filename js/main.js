/*!
 * Main.js - Hearth of Application
 * Copyright 2013-2017 CPACodex.com, Inc.
 * Licensed under the MIT license
 */
$( document ).ready( function() {  


    setInterval( newActivity, 2000 );

    function newActivity() {

        var flags   = [ 'ad', 'ae', 'af', 'us', 'al', 'am', 'ar', 'au', 'gf', 'gb', 'ph', 'ba', 'us', 're', 'ro', 'pe', 'lv', 'mk', 'us', 'pt', 'europeanunion',
                        'it', 'jp', 'ne', 'nl', 'no', 'ua', 'um'];
        var users   = [ '441Binder','Johnny', 'Attacklord_bro', 'pewdiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
                  'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoost' ];
        var avatars = [ 'https://i.imgur.com/V4GhVTn.jpg',
                        '../../i.imgur.com/ZJf7aoN.png',
                        '../../i.imgur.com/htRO3QO.jpg',
                        '../../i.imgur.com/6C7X3TM.jpg',
                        '../../i.imgur.com/n8v5Mr7.png',
                        '../../i.imgur.com/1MV2ViL.png',
                        '../../i.imgur.com/VPPMg0b.png',
                        '../../i.imgur.com/6ECGSEe.jpg',
                        'https://i.imgur.com/e7lWcDe.jpg'];

        var flag         = flags[ Math.floor( Math.random() * flags.length ) ];
        var avatar       = avatars[ Math.floor( Math.random() * avatars.length ) ];
        var user         = users[ Math.floor( Math.random() * users.length ) ];
        var Item1Rand     = Math.floor( ( Math.random() * 100000 ) + 500 );;
        var Item2Rand     = Math.floor( ( Math.random() * 500000 ) + 500 );;

        $( '.live-stats' ).last().remove();

        $( '.activityContent' ).hide().prepend('<div class="live-stats">' +
            '<div class="avatar"><img src="'+avatar+'" alt="" /></div>' +
            '<div class="flag"><img src="img/flags/'+flag+'.png" alt="" /></div>' +
           '<div class="info">' +
              '<ul>' +
                 '<li><b>'+user+',</b> generated now:</li>' +
                 '<li><img class="item-gen" src="img/Item1.png" alt="" />Coins: <span class="bucks-color">' + Item1Rand + '</span> </li>' +
                  '<li><img class="item-gen" src="img/Item2.png" alt="" />Diamonds: <span class="bucks-color">' + Item2Rand + '</span> </li>' +
              '</ul>' +
           '</div>' +
        '</div>').fadeIn();
    }

    /* Item1 */
    var $gen_Item1 = $( '.Item1-input' );
        $gen_Item1.updown ({

        	step: 5000,
            min: 5000,
            max: 100000,

        });

    var $updown_Item1 = $gen_Item1.data( 'updown');
        $( '.plus-Item1' ).click( function( event ) {

            $updown_Item1.increase( event );
            $updown_Item1.triggerEvents();

        });
        $( '.minus-Item1' ).click( function( event ) {

            $updown_Item1.decrease( event );
            $updown_Item1.triggerEvents();

        });

    /* Item2 */
    var $gen_Item2 = $( '.Item2-input' );
        $gen_Item2.updown ({

            step: 5000,
            min: 5000,
            max: 100000,

        });

    var $updown_Item2 = $gen_Item2.data( 'updown');
        $( '.plus-Item2' ).click( function( event ) {

            $updown_Item2.increase( event );
            $updown_Item2.triggerEvents();

        });
        $( '.minus-Item2' ).click( function( event ) {

            $updown_Item2.decrease( event );
            $updown_Item2.triggerEvents();

        });  


    function progressBar() {

        var width            = 1;
        var intervalProgress = setInterval( frame, 0200 );

        goToByScroll( 'generatorJS' );

        function frame() {

            if( width == 20 ) $( '.load-textJS' ).html( 'Connecting' );
            if( width == 30 ) $( '.load-textJS' ).html( 'Fetching data' );
            if( width == 40 ) $( '.load-textJS' ).html( 'GET = Variables' );
            if( width == 50 ) $( '.load-textJS' ).html( 'GET -> Username' );
            if( width == 60 ) $( '.load-textJS' ).html( 'GET -> IP Address' );
            if( width == 70 ) $( '.load-textJS' ).html( 'GET -> Coins' );
            if( width == 80 ) $( '.load-textJS' ).html( 'GET -> Diamonds' );
            if( width == 90 ) $( '.load-textJS' ).html( 'POST => DATA' );

            if ( width >= 100 ) {

                clearInterval( intervalProgress );
                $( '.generator-step2' ).slideUp();
                $( '.generator-step3' ).slideDown();

                $( '.userJS' ).html( $( '.username-input' ).val() );

                            $('.Item1JS').countTo({

                                from: 10,
                                to: $( '.Item1-input' ).val(),
                                speed: 1000,
                                refreshInterval: 1,
                                onComplete: function ( value) {

                                    $( '.Item1JSthick' ).css('opacity', '1');

                                        setTimeout( function() { 

                                            $( '.generator-step3' ).fadeOut( function() {

                                                $( '.generator-offers' ).fadeIn();

                                            });
                                            
                                        }, 2000);                                

                                }

                              

                        
                            });

                            $('.Item2JS').countTo({

                                from: 10,
                                to: $( '.Item2-input' ).val(),
                                speed: 1000,
                                refreshInterval: 1,
                                onComplete: function ( value) {

                                    $( '.Item2JSthick' ).css('opacity', '1');

                                        setTimeout( function() { 

                                            $( '.generator-step3' ).fadeOut( function() {

                                                $( '.generator-offers' ).fadeIn();

                                            });
                                            
                                        }, 2000);                                

                                }

                              

                        
                            });                

            } else {

                width++; 
                $( ".progress-bar" ).css( "width", width + '%' );
                $( ".progress-bar" ).html( width * 1 + '%' );

            }

        }

    }   
    
    /* Generator Starts Here */

    $( ".btnGenerator" ).click( function() {

    	var $player_name = $( '.username-input' ).val();

    	if( $player_name == "" || $player_name.replace(/ /g,'').length < 2 ) {

    		$( ".username-input" ).css( { border: '1px solid #F00' } );

    	} else {

    		$( ".username-input" ).css( { border: '1px solid #111319' } );	// Change border to default

    		$( '.generator' ).slideUp( function() {

    			$( '.generator-step2' ).slideDown();
                progressBar();

    		});

    	}

    });
    // .btngenerator end

    /* Button to scroll to Generator */

    $( '.btn-GoGenerator' ).click( function() {

        goToByScroll( 'generator' );

    });
});
