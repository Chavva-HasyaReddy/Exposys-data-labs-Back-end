document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;

    var docx = new Docxtemplater().loadZip(new JSZip());
    docx.setData({
        title: title,
        description: description
    });

    try {
        docx.render();
        var out = docx.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });
        saveAs(out, "Blog.docx");
    } catch (error) {
        console.error(error);
    }
});

document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var content = `Title: ${title}\nDescription:\n${description}`;

    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "Blog.txt");
});

document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;

    var wb = XLSX.utils.book_new();
    var ws_data = [
        ["Title", "Description"],
        [title, description]
    ];
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, "Blog");

    XLSX.writeFile(wb, "Blog.xlsx");
});