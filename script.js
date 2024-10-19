async function startWork() {
    const response = await fetch('https://fun-fetch-api-test.vercel.app/json.js');
    const data = await response.json();

    const amount = parseInt(data.loopAmount);
    const demoElement = document.getElementById("demo");
    demoElement.innerHTML = ""; 

    let i = 1;
    while (i <= amount) {
        demoElement.innerHTML += `<span>${i}</span><br>`; 
        i++;
    }
}
