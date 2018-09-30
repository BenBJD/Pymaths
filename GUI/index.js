function calc() {
    let a = document.getElementById("a-input").value;
    let b = document.getElementById("b-input").value;
    let c = document.getElementById("c-input").value;
    console.log(a);
    console.log(b);
    console.log(c);
    // Initialising variables
    let ans1,
        ans2;
    // Calculations
    ans1 = -1 * b + Math.sqrt(b ** 2 - 4 * a * c);
    ans1 = ans1 / (2 * a);
    ans2 = -1 * b - Math.sqrt(b ** 2 - 4 * a * c);
    ans2 = ans2 / (2 * a);
    // Output
    String(ans1);
    String(ans2);
    document.getElementById("answer1").innerHTML = ans1;
    document.getElementById("answer2").innerHTML = ans2;
}