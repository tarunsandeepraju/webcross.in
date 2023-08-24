$(document).ready(function () {
    import('./data')
    $("#district, #citySearch,#bloodgroup").prop('disabled', true);

    const $stateSelect = $('#state');
    const $districtSelect = $('#district');
    const $cityInput = $('#citySearch');

    $stateSelect.on('change', function () {
        const selectedState = $(this).val();
        if (selectedState !== "") {
            $districtSelect.prop('disabled', false);
            setupDistrictOptions(selectedState);
        } else {
            $districtSelect.prop('disabled', true);
            $cityInput.prop('disabled', true);
        }
    });

    $districtSelect.on('change', function () {
        const selectedDistrict = $(this).val();
        if (selectedDistrict !== "") {
            $cityInput.prop('disabled', false);
            //Areas
            const State=$("#state").val();
            const District=$("#district").val();
            const districtObject = stateData[State].find(district => district.district ===District);
            const cityData=districtObject.areas
            $cityInput.keyup(function (){
                searchCities(cityData);
            })
        } else {
            $cityInput.prop('disabled', true)
        }
    });

    $cityInput.on('change', function () {
        const cityInput = $(this).val();
        if (cityInput !== "") {
            $("#bloodgroup").prop('disabled', false);
        } else {
            $("#bloodgroup").prop('disabled', true);
        }
    });
    function setupDistrictOptions(selectedState) {
        // Get district data for the selected state
        const districtNamesLoop = [];
        for (const districtObject of stateData[selectedState]) {
            districtNamesLoop.push(districtObject.district);
        }
        console.log(districtNamesLoop)
        $districtSelect.empty().append($('<option selected>', {
            class: 'form-control',
            value: '',
            text: 'Select District'
        }));
        districtNamesLoop.forEach(function (district) {
            $districtSelect.append($('<option>', {
                class: 'form-control',
                value: district,
                text: district
            }));
        });
    }

    function searchCities(cityData) {
        const citySearchInput = document.getElementById("citySearch");
        const cityResultsDiv = document.getElementById("cityResults");
        const searchQuery = citySearchInput.value.toLowerCase();

        cityResultsDiv.innerHTML = "";

        if(searchQuery==="")
        {
            return;
        }

        for (const city of cityData) {
            if (city.toLowerCase().includes(searchQuery)) {
                const cityResult = document.createElement("div");
                cityResult.textContent = city;
                cityResult.classList.add("city-result");
                cityResult.addEventListener("click", function () {
                    citySearchInput.value = city;
                    cityResultsDiv.innerHTML = ""; // Clear suggestions
                });
                cityResultsDiv.appendChild(cityResult);
            }
        }
    }

});

