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

const fetchToolSentence = (tool) => {
    switch (tool) {
        case "Wisdom":
            return "You've recieved a stack of books."
        case "Strength":
            return "You've recieved a thousand bullets."
        case "Unity":
            return "You've recieved an umbrella."
        case "Leadership":
            return "You've recieved a pointer finger. It's extendable."
        default:
            return "You actually don't get anything :/"
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
const planetSubmitBtn = document.getElementById("planet-submit");
if (planetsContainer) {
    const opponentSelectionContainer = document.getElementById("opponent-selection-container");
    planetsContainer.addEventListener("click", (e) => {
        if (e.target && e.target.matches('.planets-container')) {
            // Pass along the new planetary weight value and planet value
            const weight = planetsContainer.getAttribute("weight");
            const planet = e.target.getAttribute("value")
            const planetaryWeight = calculatePlanetWeight(weight, planet)
            opponentSelectionContainer.setAttribute('weight', planetaryWeight)
            opponentSelectionContainer.setAttribute('planet', planet)
            // Display weight text and next button
            const displayWeightElem = planetsContainer.querySelector("#display-new-weight");
            displayWeightElem.querySelector("#insert-weight").innerHTML = `${planetaryWeight.toFixed(1)}lbs`
            displayWeightElem.querySelector("#insert-planet").innerHTML = `${planet}!`
            displayWeightElem.style.display = "block";
            planetSubmitBtn.style.display = "block";
        }
    });
    planetSubmitBtn.addEventListener("click", () => {
            // Grab page 4 container
            opponentSelectionContainer.style.display = "block"
            // Grab page 3 container
            planetsContainer.style.display = "none";
    });
}

// SELECT OPPONENT FROM PAGE 4
const opponentSelectionContainer = document.getElementById("opponent-selection-container");
const opponentSubmitBtn = document.getElementById("opponent-submit");
if (opponentSelectionContainer) {
    const partnerSelectionContainer = document.getElementById("partner-selection-container");
    opponentSelectionContainer.addEventListener("click", (e) => {
        if (e.target && e.target.matches('.opponents-container')) {
            // Pass along the new planetary weight value, planet value and opponent value
            const weight = opponentSelectionContainer.getAttribute("weight");
            const planet = opponentSelectionContainer.getAttribute("planet");
            const opponent = e.target.getAttribute("value");
            partnerSelectionContainer.setAttribute('weight', weight)
            partnerSelectionContainer.setAttribute('planet', planet)
            partnerSelectionContainer.setAttribute('opponent', opponent)
            // Display weight text
            const displayOppElem = opponentSelectionContainer.querySelector("#display-opponent");
            displayOppElem.querySelector("#insert-opponent").innerHTML = `${opponent}!`
            displayOppElem.style.display = "block";
            opponentSubmitBtn.style.display = "block";
        }
    });
    opponentSubmitBtn.addEventListener("click", () => {
            // Grab page 5 container
            partnerSelectionContainer.style.display = "block"
            // Grab page 4 container
            opponentSelectionContainer.style.display = "none";
    });
}

// SELECT PARTNER FROM PAGE 5
const partnerSelectionContainer = document.getElementById("partner-selection-container");
const partnerSubmitBtn = document.getElementById("partner-submit");
if (partnerSelectionContainer) {
    const toolSelectionContainer = document.getElementById("tool-selection-container");
    partnerSelectionContainer.addEventListener("click", (e) => {
        if (e.target && e.target.matches('.partners-container')) {
            // Pass along the new planetary weight value, planet, opponent and partner value
            const weight = partnerSelectionContainer.getAttribute("weight");
            const planet = partnerSelectionContainer.getAttribute("planet");
            const opponent = partnerSelectionContainer.getAttribute("opponent");
            const partner = e.target.getAttribute("value");
            toolSelectionContainer.setAttribute('weight', weight)
            toolSelectionContainer.setAttribute('planet', planet)
            toolSelectionContainer.setAttribute('opponent', opponent)
            // Display weight text
            const displayPartnerElem = partnerSelectionContainer.querySelector("#display-partner");
            displayPartnerElem.querySelector("#insert-partner").innerHTML = `${partner}`
            displayPartnerElem.style.display = "block";
            partnerSubmitBtn.style.display = "block";
        }
    });
    partnerSubmitBtn.addEventListener("click", () => {
            // Grab page 5 container
            partnerSelectionContainer.style.display = "none"
            // Grab page 6 container
            toolSelectionContainer.style.display = "block";
    });
}

// SELECT TOOL FROM PAGE 6
const toolSelectionContainer = document.getElementById("tool-selection-container");
const toolSubmitBtn = document.getElementById("tool-submit");
if (toolSelectionContainer) {
    // const partnerSelectionContainer = document.getElementById("partner-selection-container");
    toolSelectionContainer.addEventListener("click", (e) => {
        if (e.target && e.target.matches('.tool-buttons')) {
            // Pass along the new planetary weight, planet, opponent, partner and tool
            const weight = toolSelectionContainer.getAttribute("weight");
            const planet = toolSelectionContainer.getAttribute("planet");
            const opponent = toolSelectionContainer.getAttribute("opponent");
            const partner = toolSelectionContainer.getAttribute("partner");
            const tool = e.target.getAttribute("value");
            // partnerSelectionContainer.setAttribute('weight', weight)
            // partnerSelectionContainer.setAttribute('planet', planet)
            // partnerSelectionContainer.setAttribute('opponent', opponent)
            // Display weight text
            const displayToolElem = toolSelectionContainer.querySelector("#display-tool");
            displayToolElem.querySelector("#insert-tool").innerHTML = `${fetchToolSentence(tool)}`
            displayToolElem.style.display = "block";
            toolSubmitBtn.style.display = "block";
        }
    });
    toolSubmitBtn.addEventListener("click", () => {
            // Grab page 6 container
            toolSelectionContainer.style.display = "none"
            // Grab page 7 container
            // opponentSelectionContainer.style.display = "block";
    });
}