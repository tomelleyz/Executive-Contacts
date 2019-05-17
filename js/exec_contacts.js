$(document).ready(function() {

    // Funtion that opens mobile sidenav
    $("#menu").click(function() {
        $("#bodyoverlay").fadeIn();
        $("#mobilenav").css("left", "0");
    });

    // Function that closes mobile sidenav
    $("#bodyoverlay").click(function() {
        $("#mobilenav").css("left", "-270px");
        $(this).fadeOut();
    });

    var tableRows = $("div.mainTable").find("tr"); // Selects all <tr> elements in the .mainTable
    var contactRows = tableRows.not("tr.mainTableHead"); // Excludes the <tr> that contains the table headings

    // Function that opens contact card for medium screen size and above
    contactRows.click(function() {
        $(".mainTable").css("width", "48%");
        $("#contactCard").css({"right": "30px", "opacity": "1"});
        $("body").css("padding-right", "0");
    });

    // Function that closes contact card for medium screen size and above
    $("span.closeContactCard").click(function() {
        $("#contactCard").css({"right": "-500px", "opacity": "0"});
        $(".mainTable").css("width", "100%");
    });

    // Setting up the contact modal on mobile
    contactRows.attr({"data-toggle": "modal", "data-target": "#contactModal"});

    // Function to contract Sidenav on tablet and PC
    $("#contractBtn").click(function(){
        $("#sidenavPC").removeClass("col-md-3").addClass("col-md-1");
        $("#mainContentArea").removeClass("offset-md-3").removeClass("col-md-9").addClass("offset-md-1").addClass("col-md-11");
        $("#contractBtn").hide();
        $("#expandBtn").show();
        $(".toggleVisibility").hide();
    });

    // Function to expand Sidenav on tablet and PC 
    $("#expandBtn").click(function(){
        $("#mainContentArea").removeClass("offset-md-1").removeClass("col-md-11").addClass("offset-md-3").addClass("col-md-9");
        $("#sidenavPC").removeClass("col-md-1").addClass("col-md-3");
        $("#expandBtn").hide();
        $("#contractBtn").show();
        $(".toggleVisibility").show();
    });
});