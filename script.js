function isNumber(num) {
    return typeof num === 'number' && !isNaN(num);
}

function PloshadTrig() {
    var A = document.getElementById('Asize').value; 
    var B = document.getElementById('Bsize').value;
    var Plosh;
    (A.length === 0) | (B.length === 0) ? (alert("¬вод тут дл€ кого?")) : (Plosh = (parseInt(A) * parseInt(B)) * 1/2, alert(Plosh));
}

