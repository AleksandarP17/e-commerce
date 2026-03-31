function normalizeCouponCode(code) {
    let modifiedCode = code.trim().toUpperCase();
    return modifiedCode;
}

function validateAndNotify(){
    let code = document.getElementById("promo-input").value;
    code = normalizeCouponCode(code);
    if (code === RAW_COUPON){
        alert("Uneti kod je Validan");
    } else {
        alert("Uneti kod nije validan.")
    }
}