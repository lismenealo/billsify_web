// Budget Calculation
function calculate_budget() {
    let plan_mode = document.getElementById("plan_mode").value;
    let plan_duration = document.getElementById("plan_duration").value;
    let real_time = document.getElementById("real_time").checked;
    let google_pay = document.getElementById("google_pay").checked;
    let apple_pay = document.getElementById("apple_pay").checked;
    let cloud_storage = document.getElementById("cloud_storage").checked;

    if(plan_duration < 0 || plan_duration > 12)
        return;
    if(plan_duration === 0 || !plan_duration) {
        document.getElementById("budget_pre_calculation").value = 0;
        return;
    }

    /* Gets values of the variables to calculate the budget and recalculate the formula and update the value of the input element */
    document.getElementById("budget_pre_calculation").value = ((plan_mode - plan_duration)*plan_duration) +
        (real_time ? 10 : 0) +
        (google_pay ? 20 : 0) +
        (apple_pay ? 20 : 0) +
        (cloud_storage ? 25 : 0);
}

// Email Validation
function regexEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateEmail() {
    const result =  document.getElementById("result");
    const email =  document.getElementById("email").value;
    if (regexEmail(email)) {
        result.setAttribute("style","display: none");
    } else {
        result.setAttribute("style","display: block");
    }
    return false;
}