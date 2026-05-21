// 1. Excel (.xlsx) ထုတ်ယူရန် လုပ်ဆောင်ချက်
function exportToExcel() {
    // Workbook အသစ်တစ်ခု ဆောက်သည်
    var wb = XLSX.utils.book_new();
    
    // HTML Tables များကို အချက်အလက်ပြောင်းလဲသည်
    var ws1 = XLSX.utils.table_to_sheet(document.getElementById('summaryTable'));
    var ws2 = XLSX.utils.table_to_sheet(document.getElementById('detailTable'));
    
    // Sheet များကို Workbook ထဲသို့ ထည့်သွင်းသည်
    XLSX.utils.book_append_sheet(wb, ws1, "Floor Summary");
    XLSX.utils.book_append_sheet(wb, ws2, "Detailed Report");
    
    // Excel ဖိုင်ကို ဒေါင်းလုဒ်ချပေးသည်
    XLSX.writeFile(wb, "AC_Installation_Summary_Report.xlsx");
}

// 2. PDF (.pdf) ထုတ်ယူရန် လုပ်ဆောင်ချက်
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF('p', 'pt', 'a4');
    
    // ခေါင်းစဉ် ရေးသားခြင်း
    doc.setFontSize(16);
    doc.text("AIR-CONDITIONING INSTALLATION SUMMARY REPORT", 40, 40);
    
    doc.setFontSize(10);
    doc.text("Project Name: City School Yangon Project", 40, 65);
    doc.text("Location: Ground Floor to 4th Floor", 40, 80);
    doc.text("Total AC Units: 187 Units", 40, 95);
    
    // Table 1 (Summary Table) ကို PDF ထဲထည့်ခြင်း
    doc.setFontSize(12);
    doc.text("1. Floor-wise Summary", 40, 130);
    
    doc.autoTable({
        html: '#summaryTable',
        startY: 140,
        theme: 'grid',
        headStyles: { fillColor: [44, 62, 80] }
    });
    
    // Table 2 (Detailed Table) ကို PDF ထဲထည့်ခြင်း
    let finalY = doc.lastAutoTable.finalY;
    doc.text("2. Detailed Room-by-Room Report", 40, finalY + 30);
    
    doc.autoTable({
        html: '#detailTable',
        startY: finalY + 40,
        theme: 'grid',
        headStyles: { fillColor: [44, 62, 80] }
    });
    
    // PDF ဖိုင်ကို ဒေါင်းလုဒ်ချပေးသည်
    doc.save("AC_Installation_Summary_Report.pdf");
}

