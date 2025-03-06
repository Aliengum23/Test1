document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("planner-form");

    // Populate dropdowns (1-10)
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        for (let i = 1; i <= 10; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            dropdown.appendChild(option);
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let formData = new FormData(form);
        let entries = {};
        
        formData.forEach((value, key) => {
            entries[key] = value;
        });

        localStorage.setItem("dailyPlanner", JSON.stringify(entries));
        alert("Planner updated successfully!");
    });

    // Load previous data
    let savedData = JSON.parse(localStorage.getItem("dailyPlanner"));
    if (savedData) {
        Object.keys(savedData).forEach(key => {
            let input = form.elements[key];
            if (input) {
                if (input.type === "checkbox") {
                    input.checked = savedData[key] === "on";
                } else {
                    input.value = savedData[key];
                }
            }
        });
    }
});
