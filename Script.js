function calculate() {
    var length = Number(document.getElementById("input").value)
    var Area = Number(length * length)
    var Peri = Number(length * 4)

    document.getElementById("result_area").innerHTML = Area + "²"
    document.getElementById("result_peri").innerHTML = Peri
}
