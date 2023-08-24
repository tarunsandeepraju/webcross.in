$(document).ready(function () {
    import('./data')
    $("#districtdetails, #citysearchdetails,#donorbloodgroup").prop('disabled', true);

    const stateSelect = $('#statedetails');
    const districtSelect = $('#districtdetails');
    const cityInput = $('#citysearchdetails');

    stateSelect.on('change', function () {
        const selectedState = $(this).val();
        if (selectedState !== "") {
            districtSelect.prop('disabled', false);
            setupDistrictOptions(selectedState);
        } else {
            districtSelect.prop('disabled', true);
            cityInput.prop('disabled', true);
        }
    });

    districtSelect.on('change', function () {
        const selectedDistrict = $(this).val();
        if (selectedDistrict !== "") {
            cityInput.prop('disabled', false);
            //Areas
            const State=$("#statedetails").val();
            const District=$("#districtdetails").val();
            const districtObject = stateData[State].find(district => district.district ===District);
            const cityData=districtObject.areas
            cityInput.keyup(function (){
                searchcities(cityData);
            })
        } else {
            cityInput.prop('disabled', true)
        }
    });

    cityInput.on('change', function () {
        const cityInput = $(this).val();
        if (cityInput !== "") {
            $("#donorbloodgroup").prop('disabled', false);
        } else {
            $("#donorbloodgroup").prop('disabled', true);
        }
    });
    function setupDistrictOptions(selectedState) {
        // Get district data for the selected state
        const districtNamesLoop = [];
        for (const districtObject of stateData[selectedState]) {
            districtNamesLoop.push(districtObject.district);
        }

        districtSelect.empty().append($('<option>', {
            value: '',
            text: 'Select District'
        }));
        districtNamesLoop.forEach(function (district) {
            districtSelect.append($('<option>', {
                value: district,
                text: district
            }));
        });
    }

    function searchcities(cityData) {
        const citySearchInput = document.getElementById("citysearchdetails");
        const cityResultsDiv = document.getElementById("arearesults");
        const searchquery = citySearchInput.value.toLowerCase();

        cityResultsDiv.innerHTML = "";

        if(searchquery==="")
        {
            return;
        }

        for (const city of cityData) {
            if (city.toLowerCase().includes(searchquery)) {
                const cityresult = document.createElement("div");
                cityresult.textContent = city;
                cityresult.classList.add("city-result");
                cityresult.addEventListener("click", function () {
                    citySearchInput.value = city;
                    cityResultsDiv.innerHTML = ""; // Clear suggestions
                });
                cityResultsDiv.appendChild(cityresult);
            }
        }
    }

});

