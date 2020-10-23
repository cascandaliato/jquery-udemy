$("#calculate").on("click", function () {
    const amount = +$("#quant_1").val() * +$("#rate_1").val();
    $("#amount_1").val(amount);
    $("#amount_1").removeAttr("id");
    $("#output").text(`Amount Charged for quantity ${$("#quant_1").val()} is $${amount}`)
});
