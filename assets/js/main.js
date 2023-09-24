window.jsPDF = window.jspdf.jsPDF

let newImage, showImg;

const putFile = (event) => {
    showImg = document.getElementById("view-img");
    showImg.src = URL.createObjectURL(event.target.files[0]);
    newImage = document.createElement("img");
    newImage.src = URL.createObjectURL(event.target.files[0]);
    showImg.onload = function(){
        URL.revokeObjectURL(showImg.src)
    }
};

const convert = () => {
    let doc = new jsPDF();
    let img = new Image();
    img.src = newImage.src;

    img.onload = function() {
        let imgWidth = doc.internal.pageSize.getWidth();
        let imgHeight = doc.internal.pageSize.getHeight();

        doc.addImage(img, 0, 0, imgWidth, imgHeight);
        doc.save("Converted.pdf");
    };
}
