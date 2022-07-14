function myFunction15() {

    var switcher = ( state ) => {
        if( state == "on" ) {
           return "Switched on!";
        } else if ( state == "off" ) {
           return "Switched off!";
        } else {
           return "Switcher not working!";
        }
     }
     
     console.log( switcher( "off" ) );

}