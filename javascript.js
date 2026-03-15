document.getElementById("fel").addEventListener("click", function(feltolt) {
    let erreValt = document.getElementById("errevalt").value;
    let osszeg = document.getElementById("quantity").value;
    const url = `https://hexarate.paikama.co/api/rates/HUF/${erreValt}/latest`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Hiba a kérésben")
            }
            return response.json()
        })
        .then(json => {
            const mid = json.data.mid;
            const penz = json.data.target;
            document.getElementById("grid").innerHTML = (osszeg*mid).toFixed(2) + " "+ penz;
        })
        .catch(err => console.log(err));
    feltolt.preventDefault();
})
