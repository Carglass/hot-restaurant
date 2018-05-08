function table(name, phoneNumber, email, uid) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.uid = uid;
}

$(document).ready(() => {
  $.get("/api/tables", data => {
    for ([index, value] of data.entries()) {
      let tableHtml = $("<div>");
      let icon = $("<div>");
      icon.append(index);
      let name = $("<div>");
      name.append(value.uid);
      tableHtml.append(icon).append(name);
      $("#tables").append(tableHtml);
    }
  });
});
