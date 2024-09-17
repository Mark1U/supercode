document.querySelector("#double-1-btn")
    .addEventListener("click", e => {
        const eingabe = parseInt(document.querySelector("#no1").value);
        document.querySelector("#result-1").innerHTML = eingabe * 2;
        console.log({ eingabe, e });
    })

document.querySelector("#check-age-btn")
    .addEventListener("click", e => {
        const eingabe = parseInt(document.querySelector("#no1").value);
        document.querySelector("#result-1").innerHTML = (eingabe < 18) ? "Person ist unter 18" : "Person ist Volljährig";
        console.log({ eingabe, b });
    })

document.querySelector("#check-weather-btn")
    .addEventListener("click", e => {
        const eingabe = parseInt(document.querySelector("#no1").value);
        console.log({ eingabe });
        let result = "???";
        switch (true) {
            case eingabe <= 2:
                result = "schlecht"
                break;
            case eingabe >= 3 && eingabe <= 5:
                result = "okay"
                break;
            case eingabe >= 6 && eingabe <= 7:
                result = "gut"
                break;
            case eingabe >= 8 && eingabe <= 10:
                result = "super"
                break;
            default: result = "Ausserhalb der Range!";

        }

        document.querySelector("#result-1").innerHTML = "Das Wetter ist: " + result;
        console.log({ eingabe, result });
    })



document.querySelector("input[type='range']")
    .addEventListener("change", e => {
        const eingabe = parseInt(document.querySelector("input[type='range']").value);

        const aqRange = document.querySelector(".aq-range");
        aqRange.innerHTML = eingabe + "";

        const warnConcern = document.querySelector(".warn-concern");
        warnConcern.innerHTML = "Level of health concern: ";

        const warnHealth = document.querySelector(".warn-health");
        warnHealth.innerHTML = "Level of health effect: ";

        switch (true) {
            case eingabe <= 50:
                warnConcern.innerHTML += "Good";
                warnHealth.innerHTML += "Little or no risk";
                aqRange.style.backgroundColor = "green";
                break;

            case eingabe > 50 && eingabe <= 100:
                warnConcern.innerHTML += "Moderate";
                warnHealth.innerHTML += "Acceptable quality";
                aqRange.style.backgroundColor = "darkorange";
                break;

            case eingabe > 100 && eingabe <= 150:
                warnConcern.innerHTML += "Unhealthy for sensitive groups";
                warnHealth.innerHTML += "Generable publics not likely affected";
                aqRange.style.backgroundColor = "red";
                break;
        }
        console.log({ eingabe, aqRange });
    })


function diff27(zahl = 27) {
    if (zahl > 27) {
        return (zahl - 27) * 2;
    } else {
        return 27 - zahl;
    }
}

console.log(diff27(22));
console.log(diff27(35));
console.log(diff27(74));
console.log(diff27(123));