async function startWork() {
    const response = await fetch('http://127.0.0.1:5500/json.js');
    const data = await response.json();

    const ammount = await parseInt(data.loopAmount);
    const demoElement = document.getElementById("demo");
    demoElement.innerHTML = "";

    let i = 1;
    while(i <= ammount) {
        demoElement.innerHTML += `<span>${i}</span> ,`
        i++ ;
    }
}
