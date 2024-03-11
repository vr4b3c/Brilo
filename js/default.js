
$( document ).ready(function() {




    /* SERVICES FILTER */
    $(document).on("click", "#services-filter button", function() {
        
        $(this).addClass("active").siblings("button").removeClass("active");
        var what = $(this).data("select");

        if (what) {
            $("#services-cards .card").each(function(){
                var type = $(this).data("type");
                
                if (type !== what) {
                    $(this).hide(0);
                } else {
                    $(this).show(0);               
                }
            });
        } else {
            $("#services-cards .card").show(0);
        }    
    });

});