function quadForm() {
    let a = document.getElementById("quadForm-a").value;
    let b = document.getElementById("quadForm-b").value;
    let c = document.getElementById("quadForm-c").value;
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

function quadSeq() {
    let seq1 = []
}