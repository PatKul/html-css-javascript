const inputBox = document.getElementById("input");

function reverse(value) {
  return value.split("").reverse().join("");
}

function check() {
  const value = inputBox.value;

  if (value == "") {
    alert("Enter valid value");
    return;
  }

  const reversedValue = reverse(value);

  if (value == reversedValue) {
    alert(`${value} is a palendrome`);
  } else {
    alert(`${value} is not a palendrome`);
  }

  inputBox.value = "";
  inputBox.focus();
}
