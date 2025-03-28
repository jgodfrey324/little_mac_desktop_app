// HELPERS ------------------
const calculatePlanetWeight = (weight, planet) => {
    switch (planet) {
        case "Mercury":
            return weight * 0.38
        case "Venus":
            return weight * 0.91
        case "Mars":
            return weight * 0.38
        case "Jupiter":
            return weight * 2.34
        case "Saturn":
            return weight * 1.06
        case "Neptune":
            return weight * 1.19
        default:
            return weight
    }
}




// BEGIN JOURNY FROM PAGE 1
const beginJourneyBtn = document.getElementById("begin-journey-btn");
if (beginJourneyBtn) {
    beginJourneyBtn.addEventListener("click", () => {
        // Grab page 2 container
        const profileInfoContainer = document.getElementById("profile-info-container");
        profileInfoContainer.style.display = "block";
        // Grab page 1 container
        const welcomeContainer = document.getElementById("welcome-container");
        welcomeContainer.style.display = "none"
    });
}

// ENTER WEIGHT FROM PAGE 2
const enterWeightInput = document.getElementById("weight-input");
const weightSubmitBtn = document.getElementById("weight-submit");
if (weightSubmitBtn) {
    weightSubmitBtn.addEventListener("click", () => {
        // Grab page 2 container
        const profileInfoContainer = document.getElementById("profile-info-container");
        profileInfoContainer.style.display = "none" // Hide the previous container
        // Grab page 3 container
        const planetSelectionContainer = document.getElementById("planet-selection-container");
        planetSelectionContainer.style.display = "block"; // Show the new container
        // Pass along the weight value
        planetSelectionContainer.setAttribute('weight', `${enterWeightInput.value}`)
    });
}

// SELECT PLANET FROM PAGE 3
const planetsContainer = document.getElementById("planet-selection-container");
if (planetsContainer) {
    planetsContainer.addEventListener("click", (e) => {
        if (e.target && e.target.matches('.planets-container')) {
            // Grab page 4 container
            // const profileInfoContainer = document.getElementById("profile-info-container");
            // profileInfoContainer.style.display = "none" // Hide the previous container
            // Grab page 3 container
            planetsContainer.style.display = "block"; // Show the new container
            // Pass along the new planetary weight value
            const weight = planetsContainer.getAttribute("weight");
            const planet = e.target.getAttribute("value")
            const planetaryWeight = calculatePlanetWeight(weight, planet)
            // Display weight text
            const displayWeightElem = planetsContainer.querySelector("#display-new-weight");
            displayWeightElem.querySelector("#insert-weight").innerHTML = `${planetaryWeight.toFixed(1)}lbs`
            displayWeightElem.querySelector("#insert-planet").innerHTML = `${planet}!`
            displayWeightElem.style.display = "block";
            //
            planetsContainer.setAttribute('weight', `${planetaryWeight}`)
        }
    });
}