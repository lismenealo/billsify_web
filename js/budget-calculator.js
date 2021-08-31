// Budget Calculation
function calculate_budget() {
    let plan_mode = document.getElementById("plan_mode").value;
    let plan_duration = document.getElementById("plan_duration").value;
    let real_time = document.getElementById("real_time").checked;
    let google_pay = document.getElementById("google_pay").checked;
    let apple_pay = document.getElementById("apple_pay").checked;
    let cloud_storage = document.getElementById("cloud_storage").checked;

    document.getElementById("budget_pre_calculation").value = (plan_duration*plan_mode) +
        (real_time ? 10 : 0) +
        (google_pay ? 20 : 0) +
        (apple_pay ? 20 : 0) +
        (cloud_storage ? 25 : 0);
}