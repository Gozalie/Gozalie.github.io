function pComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gunting';
    if (comp >= 0.34 && comp < 0.66) return 'kertas';
    return 'batu';
}

function ruleGame(comp, p) {
    if (p == comp) return 'SERI';
    if (p == 'gunting') return (comp == 'kertas') ? 'ANDA MENANG' : 'ANDA KALAH !!';
    if (p == 'kertas') return (comp == 'gunting') ? 'ANDA KALAH !!' : 'ANDA MENANG';
    if (p == 'batu') return (comp == 'kertas') ? 'ANDA KALAH !!' : 'ANDA MENANG';
}

// mengacak gambar pilihan computer
function acakGambar() {
    const imgComputer = document.querySelector('.gam-comp');
    const gambar = ['gunting', 'kertas', 'batu'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
}



// eksekusi
const semuaGam = document.querySelectorAll('li img');
semuaGam.forEach(function (gam) {
    gam.addEventListener('click', function () {
        const pilihanComputer = pComputer();
        const pilihanPlayer = gam.className;
        const hasil = ruleGame(pilihanComputer, pilihanPlayer);


        acakGambar();

        setTimeout(function () {
            const gamComputer = document.querySelector('.gam-comp');
            gamComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

    })
});


// mengubah warna background
document.body.addEventListener('mousemove', function (event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ', 100)'
});