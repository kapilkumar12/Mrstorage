/* Function to display notification.
 ** Prerequisites: Jquery.
 ** message : "The message to be printed on the notification dialog".
 ** messageType: "Can be: success, warning, error"
 */
$(function () {
  let notificationHtml = `
<div id="rNotify">
  <div id="msg_display">
    <div class="icon">
      <i class="fa "></i>
    </div>
    <div class="msg">
      <span id="msg-type"></span>
      <p id="msg-dis"></p>
    </div>
</div>  
</div>
`;
  $("body").append(notificationHtml);
});
function rNotify(notification) {
  let messageType = "Success";
  let messageClass = "success";
  let faClass = "fa-check-square-o";
  switch (notification.messageType) {
    case "success": {
      messageType = "Success";
      messageClass = "success";
      faClass = "fa-check-square-o";
      break;
    }
    case "warning": {
      messageType = "Warning";
      messageClass = "warning";
      faClass = "fa-exclamation-triangle";
      break;
    }
    case "error": {
      messageType = "Error";
      messageClass = "error";
      faClass = "fa-times-circle-o";
      break;
    }
    // code block
    default:
    // code block
  }
  $("#msg-type").html(messageType);
  $("#msg-dis").html(notification.message);
  $(".icon i").addClass(faClass);
  $("#msg_display").addClass("show").addClass(messageClass);
  setTimeout(function () {
    $("#msg_display").removeClass("show").removeClass(messageClass);
    $(".icon i").removeClass(faClass);
  }, 8000);
}
