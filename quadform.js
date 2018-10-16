function quadform() {
    let a = prompt("Enter a");
    let b = prompt("Enter b");
    let c = prompt("Enter c");
    let ans1,
        ans2;
    alert(a);
    alert(b);
    alert(c);
    // Calculations
    ans1 = -1 * b + Math.sqrt(b ** 2 - 4 * a * c);
    ans1 = ans1 / (2 * a);
    ans2 = -1 * b - Math.sqrt(b ** 2 - 4 * a * c);
    ans2 = ans2 / (2 * a);
    // Output
    String(ans1);
    String(ans2);
    prompt(ans1)
    prompt(ans2)
}
quadform()