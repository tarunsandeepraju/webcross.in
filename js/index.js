$(document).ready(function () {

    //Preloader
    window.addEventListener("load", () => {
        setTimeout(function () {
                $("#preloader").hide();
                $("#mainview").fadeIn();
                $(".nav").addClass("animate__animated animate__bounceInDown");
            }, 3000);
        });


    //tooltip
    $('[data-toggle="tooltip"]').tooltip()

    //search donor view
    $("#secondindex,#detailsview").hide();
    $("#search").click(function () {
        $("#firstindex").hide();
        $("#secondindex").fadeIn();
    })

    //Back link
    $("#back").click(function () {
        $("#secondindex").hide();
        $("#firstindex").fadeIn();
    })

    //Home
    $("#home").click(function () {
        $("#shell").fadeIn()
        $("#detailsview,#record").hide()
    })


    //Donor Details Into Database
    $("#message").hide();
    $("#submitdetails").click(function () {
        $("#message").removeClass("alert-danger alert-success");
        let name = $("#name").val();
        let age = $("#age").val();
        let phno = $("#phno").val();
        let state = $("#statedetails").val();
        let district = $("#districtdetails").val();
        let area = $("#citysearchdetails").val();
        let bloodgroup = $("#donorbloodgroup").val();

        if (name !== "" && age !== "" && phno !== "" && state !== "" && district !== "" && area !== "" && bloodgroup !== "") {
            if (age < 18 || age > 60) {
                $("#message").text("Please enter a valid age range between 18-60");
                $("#message").addClass("alert-danger");
                $("#message").fadeIn();
            } else if (phno.length !== 10 || !/^\d+$/.test(phno)) {
                $("#message").text("Please enter a valid 10-digit Phone Number");
                $("#message").addClass("alert-danger");
                $("#message").fadeIn();
            } else {
                // Check if the phone number already exists before proceeding
                $.ajax({
                    url: "checkphno.php",
                    method: "POST",
                    data: { phno: phno },
                    success: function (response) {
                        console.log(response)
                        if (response === "exists") {
                            $("#message").text("Phone Number already exists.");
                            $("#message").addClass("alert-danger");
                            $("#message").fadeIn();
                        } else {
                            $.ajax({
                                url: "insertdetails.php",
                                method: "POST",
                                data: {
                                    name: name,
                                    age: age,
                                    phno: phno,
                                    state: state,
                                    district: district,
                                    area: area,
                                    bloodgroup: bloodgroup
                                },
                                success: function () {
                                    $("#submitdetails").text("Donating...");
                                    setTimeout(function () {
                                        $("#submitdetails").text("Donate");
                                        $("#submitdetails").addClass("btn-danger");
                                        $("#submitdetails").removeClass("btn-success");
                                        $("#message").text("Donated Succesfully");
                                        $("#message").addClass("alert-success");
                                        $("#message").fadeIn();
                                        $("#name,#citysearchdetails,#age,#statedetails,#phno,#districtdetails,#donorbloodgroup").val("")
                                    }, 3000)
                                }
                            });
                        }
                    }
                });
            }
        } else {
            $("#message").fadeIn();
            $("#message").text("Please fill all details.");
            $("#message").addClass("alert-danger");
        }
    });



    //Find Donors
    $("#error,#record").hide();
    $("#find").click(function () {
        $("#find").text("Finding Nearest Donors...")
        setTimeout(function () {
            $("#shell").hide();
            $("#find").text("Find")
            $("#detailsview").fadeIn();
            showdetails();
        }, 3000)
    })

    function showdetails(){
        let state=$("#state").val();
        let district=$("#district").val();
        let area=$("#citySearch").val();
        let bloodgroup=$("#bloodgroup").val();
        if(state!==""&&district!==""&&area!==""&&bloodgroup!=="")
        {   console.log(state,district,area,bloodgroup)
            $.ajax({
                url:"retrievedonor.php",
                method: "POST",
                dataType:"json",
                data:{
                    state:state,
                    district:district,
                    area:area,
                    bloodgroup:bloodgroup
                },
                cache:false,
                success:function (data){
                    let x;
                    let i;
                    let output = "";
                    if (data) {
                        console.log(data)
                        x = data;
                        for (i = 0; i < x.length; i++) {
                            output += "<div class=\"container mb-3 pl-3 bg-light shadow border-danger animate__animated animate__flipInX\"\n" +
                                "         style=\"opacity: 90%; border-radius: 10px;min-height: 30vh\">\n" +
                                "        <div class=\"row\">\n" +
                                "            <div class=\"col-8\">\n" +
                                "                <h1 class=\"text-success\">"+x[i].name+"</h1>\n" +
                                "            </div>\n" +
                                "            <div class=\"col-4 d-flex justify-content-end pt-2\">\n" +
                                "                <h3><span class=\"bi bi-droplet-fill text-danger ml-2\"></span>&nbsp;"+x[i].blood_group+"</h3>\n" +
                                "            </div>\n" +
                                "        </div>\n" +
                                "        <div class=\"font-weight-bold text-secondary mb-3\">\n" +
                                "            <p class=\"bi bi-heart-fill\"><span class=\"pl-2\">"+x[i].age+"&nbsp;years</span></p>\n" +
                                "            <p class=\"bi bi-geo-alt-fill\">\n" +
                                "                <span class=\"pl-2\">"+x[i].area+"</span>\n" +
                                "                <span class=\"bi bi-slash-lg\"></span>\n" +
                                "                <span>"+x[i].district+"</span>\n" +
                                "                <span class=\"bi bi-slash-lg\"></span>\n" +
                                "                <span>"+x[i].state+"</span>\n" +
                                "            </p>\n" +
                                "            <div class=\"d-flex align-items-center\">\n" +
                                "                <span class=\"bi bi-telephone-fill\"></span>\n" +
                                "                <a class=\"pl-2 nav-link\" href=\"tel:"+x[i].phone_no+"\">"+x[i].phone_no+"</a>\n" +
                                "            </div>\n" +
                                "          </div>\n" +
                                "    </div>"
                        }
                        $("#detailsview").html(output);
                        $("#shell").hide();
                        $("#detailsview").fadeIn();
                    }
                    else {
                        output = "No Donor found";
                        $("#record").html("<h1>"+output+"</h1><p class='text-primary mb-2'>Click on Home</p>");
                        $("#record").fadeIn();
                    }
                },
                error:function (data){
                    console.log(data)
                }
            })
        }
        else{
            $("#error").text("Fill all Details")
            $("#error").fadeIn();
        }
    }
})