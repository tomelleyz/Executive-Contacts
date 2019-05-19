$(document).ready(function() {

    //
    // XMLHttpRequest that fetches and reads data from the JSON format
    // file containing contacts details
    //
    var contactsData;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            contactsData = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", "json_contacts_data.txt", true)
    xmlhttp.send();

    //
    // Funtion that opens mobile sidenav
    //
    $("#menu").click(function() {
        $("#bodyoverlay").fadeIn();
        $("#mobilenav").css("left", "0");
    });

    //
    // Function that closes mobile sidenav
    //
    $("#bodyoverlay").click(function() {
        $("#mobilenav").css("left", "-270px");
        $(this).fadeOut();
    });

    // Selects all <tr> elements in the .mainTable
    var tableRows = $("div.mainTable").find("tr"); 

    // Excludes the <tr> that contains the table headings
    var contactRows = tableRows.not("tr.mainTableHead"); 

    //
    // Function that opens contact card for medium screen size and above
    //
    contactRows.click(function() {
        $(".mainTable").css("width", "48%");
        $("#contactCard").css({"right": "30px", "opacity": "1"});

        var rowIndex = $(this).attr("data-rowindex"); // Gets the index of the row clicked 
        parseInt(rowIndex); // Converts the string to number

        // rowIndex of the clicked row is used to access the contactsData
        // and dynamically display the Contact's details
        $(".contactName").text(contactsData.contacts[rowIndex].firstname + " " + contactsData.contacts[rowIndex].lastname);
        $(".contactEmail").text(contactsData.contacts[rowIndex].email);
        $(".contactPhone").text(contactsData.contacts[rowIndex].phone);
        $(".contactCompany").text(contactsData.contacts[rowIndex].company);
        $(".contactCountry").text(contactsData.contacts[rowIndex].country);
    
        // Displays the current contact's details on the 'edit contact form'
        $(".editTitle").text("Edit " + contactsData.contacts[rowIndex].firstname + " " + contactsData.contacts[rowIndex].lastname + "'s details");
        $(".editFirstNameField").val(contactsData.contacts[rowIndex].firstname);
        $(".editLastNameField").val(contactsData.contacts[rowIndex].lastname);
        $(".editEmailField").val(contactsData.contacts[rowIndex].email);
        $(".editPhoneField").val(contactsData.contacts[rowIndex].phone);
        $(".editCompanyField").val(contactsData.contacts[rowIndex].company);
        $(".editCountryField").val(contactsData.contacts[rowIndex].country);
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
        $(this).hide();
        $("#expandBtn").show();
        $(".sidenavText").hide();
    });

    // Function to expand Sidenav on tablet and PC 
    $("#expandBtn").click(function(){
        $("#mainContentArea").removeClass("offset-md-1").removeClass("col-md-11").addClass("offset-md-3").addClass("col-md-9");
        $("#sidenavPC").removeClass("col-md-1").addClass("col-md-3");
        $(this).hide();
        $("#contractBtn").show();
        $(".sidenavText").show("slow");
    });

    // Replace the contact card and modal with an 'edit contact form' on clicking the edit button
    $(".editBtn").click(function(){
        $(".modal-card-contact-details").hide("slow");
        $(".editContactForm").show("slow");
    });

    // Replace the 'edit contact form' with the contact card and modal on clicking the cancel button
    $(".cancelEditBtn").click(function(){
        $(".editContactForm").hide("slow");
        $(".modal-card-contact-details").show("slow");
    });
});