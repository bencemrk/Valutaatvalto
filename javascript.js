
document.getElementById("fel").addEventListener("click", feltolt)

function feltolt() {
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
            const mid = json.mid.value;
            console.log(mid)
        })
        .catch(err => console.log(err));
}

