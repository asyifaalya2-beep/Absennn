let daftarAbsen = [];

function addAbsen() {
    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const status = document.getElementById("status").value;

    if (nama === "" || tanggal === "" || status === "") {
        alert("Lengkapi semua data!");
        return;
    }

    daftarAbsen.push({ nama, tanggal, status });
    renderAbsen();

    document.getElementById("nama").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("status").value = "";
}

function renderAbsen() {
    const tbody = document.querySelector("#absenTable tbody");
    tbody.innerHTML = "";

    daftarAbsen.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="py-2 px-4 border-b">${item.nama}</td>
            <td class="py-2 px-4 border-b">${item.tanggal}</td>
            <td class="py-2 px-4 border-b">${item.status}</td>
        `;
        tbody.appendChild(tr);
    });
}
