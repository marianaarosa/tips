function calculateTip() {
  let price = document.getElementById("price").value;
  let tip = document.getElementById("tip").value;
  let peoples = document.getElementById("peoples").value;


  if (price == "" || tip == "" || peoples == "") {
    alert("Please fill out all fields");
    return;
  }

  let result = parseFloat(price) * (parseFloat(tip) / 100);
  document.getElementById("result").value = result;
  let bill = ((parseFloat(result) + parseFloat(price)) / parseFloat(peoples));
  console.log(bill);
  document.getElementById("bill").value = bill;

}


function clearForm() {
  document.getElementById("price").value = "";
  document.getElementById("tip").value = "";
  document.getElementById("peoples").value = "";
  document.getElementById("result").value = "";
  document.getElementById("bill").value = "";
}
