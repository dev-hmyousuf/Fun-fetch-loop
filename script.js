async function startWork() {
    const response = await fetch('https://fun-fetch-api-test.vercel.app/json.js');
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
