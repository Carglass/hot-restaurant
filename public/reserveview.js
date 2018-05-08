function table(name, phoneNumber, email, uid) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.uid = uid;
}

function submitReservation(table) {}

$(document).ready(() => {
  $(document).on("click", "#submit-reservation", function(event) {
    event.preventDefault();
    let name = $("#name")
      .val()
      .trim();
    let phoneNumber = $("#phoneNumber")
      .val()
      .trim();
    let email = $("#email")
      .val()
      .trim();
    let uid = $("#uid")
      .val()
      .trim();
    let tableInput = new table(name, phoneNumber, email, uid);
    $.post("/api/tables", tableInput)
      .done(() => {
        console.log("success");
      })
      .fail(() => {
        console.log("post failed");
      });
  });

  $(document).on("click", "#clear-form", function(event) {
    $("#name").val("");
    $("#phoneNumber").val("");
    $("#email").val("");
    $("#uid").val("");
  });
});
