// အချက်အလက်များအားလုံးကို စာရင်းပြုစုထားသော Array ဒေတာစုကြီး
const reportData = [
    // Ground Floor
    { floor: "Ground Floor", room: "M&E Control Room", qty: 1, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-G-01", odu: "CU-G-01", status: "100% Done" },
    { floor: "Ground Floor", room: "Playground", qty: 5, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-G-02 to 04, 06, 07", odu: "CU-G-02 to 04, 06, 07", status: "100% Done" },
    { floor: "Ground Floor", room: "Walkway", qty: 2, brand: "CHIGO", type: "Ceiling Cassette", idu: "FCU-G-05 / 11", odu: "CU-G-05 / 11", status: "100% Done" },
    { floor: "Ground Floor", room: "Classroom-3", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-G-08 / 09 / 10", odu: "CU-G-08 / 09 / 10", status: "100% Done" },
    { floor: "Ground Floor", room: "Classroom-2", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-G-12 / 13 / 14", odu: "CU-G-12 / 13 / 14", status: "100% Done" },
    { floor: "Ground Floor", room: "Classroom-1", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-G-15 / 16 / 17", odu: "CU-G-15 / 16 / 17", status: "100% Done" },
    { floor: "Ground Floor", room: "Merchandising", qty: 4, brand: "HISENSE", type: "Ceiling Cassette", idu: "FCU-G-18 to 21", odu: "CU-G-18 to 21", status: "100% Done" },
    { floor: "Ground Floor", room: "Office", qty: 1, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-G-22", odu: "CU-G-22", status: "100% Done" },
    { floor: "Ground Floor", room: "Finance", qty: 1, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-G-23", odu: "CU-G-23", status: "100% Done" },
    { floor: "Ground Floor", room: "Reception Room", qty: 2, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-G-24 / 25", odu: "CU-G-24 / 25", status: "100% Done" },
    { floor: "Ground Floor", room: "Nursery Room", qty: 2, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-G-26 / 27", odu: "CU-G-26 / 27", status: "100% Done" },
    { floor: "Ground Floor", room: "Reading Room", qty: 2, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-G-28 / 29", odu: "CU-G-28 / 29", status: "100% Done" },
    { floor: "Ground Floor", room: "Waiting Lounge", qty: 4, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-G-30 to 33", odu: "CU-G-30 to 33", status: "100% Done" },

    // First Floor
    { floor: "First Floor", room: "ICT Room", qty: 1, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-1-01", odu: "CU-1-01", status: "100% Done" },
    { floor: "First Floor", room: "HST Room", qty: 1, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-1-02", odu: "CU-1-02", status: "100% Done" },
    { floor: "First Floor", room: "Walkway", qty: 2, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-1-03 / 14", odu: "CU-1-03 / 14", status: "100% Done" },
    { floor: "First Floor", room: "Lab Room", qty: 4, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-1-04 to 07", odu: "CU-1-04 to 07", status: "100% Done" },
    { floor: "First Floor", room: "Art Room", qty: 3, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-1-08 / 09 / 10", odu: "CU-1-08 / 09 / 10", status: "100% Done" },
    { floor: "First Floor", room: "Music Room", qty: 3, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-1-11 / 12 / 13", odu: "CU-1-11 / 12 / 13", status: "100% Done" },
    { floor: "First Floor", room: "Year 2C", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-1-15 / 16 / 17", odu: "CU-1-15 / 16 / 17", status: "100% Done" },
    { floor: "First Floor", room: "Year 2B", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-1-18 / 19 / 20", odu: "CU-1-18 / 19 / 20", status: "100% Done" },
    { floor: "First Floor", room: "Year 2A", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-1-21 / 22 / 23", odu: "CU-1-21 / 22 / 23", status: "100% Done" },
    { floor: "First Floor", room: "Year 1A", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-1-24 / 25 / 26", odu: "CU-1-24 / 25 / 26", status: "100% Done" },
    { floor: "First Floor", room: "Year 1B", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-1-27 / 28 / 29", odu: "CU-1-27 / 28 / 29", status: "100% Done" },
    { floor: "First Floor", room: "Teacher Office", qty: 1, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-1-30", odu: "CU-1-30", status: "100% Done" },
    { floor: "First Floor", room: "M&E Room", qty: 1, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-1-31", odu: "CU-1-31", status: "100% Done" },
    { floor: "First Floor", room: "Clinic & Office", qty: 4, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-1-32 to 35", odu: "CU-1-32 to 35", status: "100% Done" },
    { floor: "First Floor", room: "Principal Office", qty: 1, brand: "HISENSE", type: "Ceiling Cassette", idu: "FCU-1-36", odu: "CU-1-36", status: "100% Done" },

    // Second Floor
    { floor: "Second Floor", room: "Year 6B", qty: 4, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-2-01 to 04", odu: "CU-2-01 to 04", status: "100% Done" },
    { floor: "Second Floor", room: "Year 6A", qty: 4, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-2-05 to 08", odu: "CU-2-05 to 08", status: "100% Done" },
    { floor: "Second Floor", room: "Year 5B", qty: 4, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-2-09/10/12/13", odu: "CU-2-09/10/12/13", status: "100% Done" },
    { floor: "Second Floor", room: "Walkway", qty: 3, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-2-11 / 17 / 38", odu: "CU-2-11 / 17 / 38", status: "100% Done" },
    { floor: "Second Floor", room: "Year 5A", qty: 4, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-2-14/15/16/18", odu: "CU-2-14/15/16/18", status: "100% Done" },
    { floor: "Second Floor", room: "Year 4C", qty: 3, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-2-19 / 20 / 21", odu: "CU-2-19 / 20 / 21", status: "100% Done" },
    { floor: "Second Floor", room: "Year 4B", qty: 4, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-2-22/23/24/27", odu: "CU-2-22/23/24/27", status: "100% Done" },
    { floor: "Second Floor", room: "Year 4A", qty: 2, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-2-25 / 26", odu: "CU-2-25 / 26", status: "100% Done" },
    { floor: "Second Floor", room: "Year 3A & 3B", qty: 6, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-2-28 to 33", odu: "CU-2-28 to 33", status: "100% Done" },
    { floor: "Second Floor", room: "Year 3C", qty: 3, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-2-34 / 35 / 36", odu: "CU-2-34 / 35 / 36", status: "100% Done" },
    { floor: "Second Floor", room: "Year 4D", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-2-37 / 39 / 40", odu: "CU-2-37 / 39 / 40", status: "100% Done" },
    { floor: "Second Floor", room: "Year 4E", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-2-41 / 42 / 43", odu: "CU-2-41 / 42 / 43", status: "100% Done" },
        // Third Floor
    { floor: "Third Floor", room: "A Level Room", qty: 6, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-3-01 to 06", odu: "CU-3-01 to 06", status: "100% Done" },
    { floor: "Third Floor", room: "AIS Room", qty: 4, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-3-07/08/09/11", odu: "CU-3-07/08/09/11", status: "100% Done" },
    { floor: "Third Floor", room: "Walkway", qty: 3, brand: "DAIKIN", type: "Ceiling Cassette", idu: "FCU-3-10 / 16 / 35", odu: "CU-3-10 / 16 / 35", status: "100% Done" },
    { floor: "Third Floor", room: "Year 7C", qty: 4, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-3-12 to 15", odu: "CU-3-12 to 15", status: "100% Done" },
    { floor: "Third Floor", room: "Year 8C & 8B", qty: 6, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-3-17 to 22", odu: "CU-3-17 to 22", status: "100% Done" },
    { floor: "Third Floor", room: "Year 8A", qty: 3, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-3-23 / 24 / 25", odu: "CU-3-23 / 24 / 25", status: "100% Done" },
    { floor: "Third Floor", room: "Year 9A & 9B", qty: 6, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-3-26 to 31", odu: "CU-3-26 to 31", status: "100% Done" },
    { floor: "Third Floor", room: "Extra", qty: 2, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-3-32 / 33", odu: "CU-3-32 / 33", status: "100% Done" },
    { floor: "Third Floor", room: "Year 7A", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-3-34 / 36 / 37", odu: "CU-3-34 / 36 / 37", status: "100% Done" },
    { floor: "Third Floor", room: "Year 7B", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-3-38 / 39 / 40", odu: "CU-3-38 / 39 / 40", status: "100% Done" },

    // Fourth Floor
    { floor: "Fourth Floor", room: "Hall", qty: 12, brand: "DAIKIN / SHIMAZU", type: "Ceiling Cassette", idu: "FCU-4-01 to 12", odu: "CU-4-01 to 12", status: "100% Done" },
    { floor: "Fourth Floor", room: "Year 11D", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-4-13 / 14 / 15", odu: "CU-4-13 / 14 / 15", status: "100% Done" },
    { floor: "Fourth Floor", room: "Year 11B", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-4-16 / 17 / 18", odu: "CU-4-16 / 17 / 18", status: "100% Done" },
    { floor: "Fourth Floor", room: "Year 11A", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-4-19 / 20 / 21", odu: "CU-4-19 / 20 / 21", status: "100% Done" },
    { floor: "Fourth Floor", room: "Year 10A", qty: 3, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-4-22 / 23 / 24", odu: "CU-4-22 / 23 / 24", status: "100% Done" },
    { floor: "Fourth Floor", room: "Year 10B", qty: 3, brand: "DAIKIN / SUMMIT", type: "Wall-Mounted", idu: "FCU-4-25 / 26 / 27", odu: "CU-4-25 / 26 / 27", status: "100% Done" },
    { floor: "Fourth Floor", room: "Extra", qty: 2, brand: "DAIKIN", type: "Wall-Mounted", idu: "FCU-4-28 / 29", odu: "CU-4-28 / 29", status: "100% Done" },
    { floor: "Fourth Floor", room: "Year 11C", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-4-30 / 31 / 32", odu: "CU-4-30 / 31 / 32", status: "100% Done" },
    { floor: "Fourth Floor", room: "Year 11E", qty: 3, brand: "SUMMIT", type: "Wall-Mounted", idu: "FCU-4-33 / 34 / 35", odu: "CU-4-33 / 34 / 35", status: "100% Done" }
];

// Summary Table ဒေတာများ
const summaryData = [
    { no: 1, level: "Ground Floor", rooms: 13, ac: 33, status: "On Progress" },
    { no: 2, level: "First Floor", rooms: 15, ac: 36, status: "On Progress" },
    { no: 3, level: "Second Floor", rooms: 16, ac: 43, status: "On Progress" },
    { no: 4, level: "Third Floor", rooms: 12, ac: 40, status: "On Progress" },
    { no: 5, level: "Fourth Floor", rooms: 10, ac: 35, status: "On Progress" }
];

// 📄 စာမျက်နှာစတင်ချိန်တွင် ဇယားများကို အလိုအလျောက် တည်ဆောက်ပေးမည့် စနစ်
document.addEventListener("DOMContentLoaded", function() {
    buildSummaryTable();
    buildDetailTable();
});

function buildSummaryTable() {
    const tbody = document.getElementById("summaryTableBody");
    tbody.innerHTML = "";
    summaryData.forEach(row => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.no}</td>
            <td>${row.level}</td>
            <td>${row.rooms}</td>
            <td>${row.ac}</td>
            <td><span class="status-progress">${row.status}</span></td>
            <td><div class="photo-cell"><input type="file" accept="image/*" onchange="previewImage(event)"><span class="upload-btn">📷 View/Upload</span></div></td>
        `;
        tbody.appendChild(tr);
    });
    // Total Row ပေါင်းထည့်ခြင်း
    let totalTr = document.createElement("tr");
    totalTr.classList.add("total-row");
    totalTr.innerHTML = `<td></td><td>Total</td><td>66</td><td>187</td><td></td><td></td>`;
    tbody.appendChild(totalTr);
}

function buildDetailTable() {
    const tbody = document.getElementById("detailTableBody");
    tbody.innerHTML = "";
    
    // Rowspan အတွက် အထပ်အလိုက် အရေအတွက်ကို တွက်ချက်ခြင်း
    const floorCounts = {};
    reportData.forEach(item => {
        floorCounts[item.floor] = (floorCounts[item.floor] || 0) + 1;
    });

    const renderedFloors = {};

    reportData.forEach(item => {
        let tr = document.createElement("tr");
        let floorTd = "";
        
        if (!renderedFloors[item.floor]) {
            floorTd = `<td rowspan="${floorCounts[item.floor]}" class="floor-header">${item.floor}</td>`;
            renderedFloors[item.floor] = true;
        }

        tr.innerHTML = `
            ${floorTd}
            <td>${item.room}</td>
            <td>${item.qty}</td>
            <td>${item.brand}</td>
            <td>${item.type}</td>
            <td>${item.idu}</td>
            <td>${item.odu}</td>
            <td><div class="photo-cell"><input type="file" accept="image/*" onchange="previewImage(event)"><span class="upload-btn">➕ Add</span></div></td>
            <td><div class="photo-cell"><input type="file" accept="image/*" onchange="previewImage(event)"><span class="upload-btn">➕ Add</span></div></td>
            <td><div class="photo-cell"><input type="file" accept="image/*" onchange="previewImage(event)"><span class="upload-btn">➕ Add</span></div></td>
            <td><span class="status-done">${item.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// 📷 ဓာတ်ပုံတင်ခြင်းနှင့် Preview စနစ်
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        const parentCell = event.target.parentElement;
        reader.onload = function(e) {
            const existingImg = parentCell.querySelector('.uploaded-img');
            if (existingImg) existingImg.remove();
            
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('uploaded-img');
            img.onclick = function(ex) {
                ex.stopPropagation();
                openModal(e.target.result);
            };
            parentCell.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = src;
}
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// 📥 Excel ထုတ်ယူရန် လုပ်ဆောင်ချက်
function exportToExcel() {
    var wb = XLSX.utils.book_new();
    var ws1 = XLSX.utils.table_to_sheet(document.getElementById('summaryTable'));
    var ws2 = XLSX.utils.table_to_sheet(document.getElementById('detailTable'));
    XLSX.utils.book_append_sheet(wb, ws1, "Floor Summary");
    XLSX.utils.book_append_sheet(wb, ws2, "Detailed Report");
    XLSX.writeFile(wb, "AC_Installation_Full_Report.xlsx");
}

// 📄 PDF ထုတ်ယူရန် လုပ်ဆောင်ချက်
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF('l', 'pt', 'a4');
    doc.setFontSize(16);
    doc.text("AIR-CONDITIONING INSTALLATION SUMMARY REPORT", 40, 40);
    doc.setFontSize(10);
    doc.text("Project Name: City School Yangon Project | Location: Ground Floor to 4th Floor", 40, 60);
    
    doc.autoTable({
        html: '#detailTable',
        startY: 90,
        theme: 'grid',
        styles: { fontSize: 7, cellPadding: 4 },
        headStyles: { fillColor: [26, 54, 93] },
        didParseCell: function(data) {
            if (data.cell.section === 'body' && (data.column.index >= 7 && data.column.index <= 9)) {
                data.cell.text = ['[No Photo]'];
            }
        }
    });
    doc.save("AC_Installation_Full_Report.pdf");
}
