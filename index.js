let no_of_unread = $(".notification-container--unread").length;

$("#notification-count").text(no_of_unread);

$(".notification-main__text").click(function () {
  const notifications = $(".notification-container")
    .map(function () {
      return $(this);
    })
    .get();

  for (let i = 0; i < notifications.length; i++) {
    if (notifications[i].hasClass("notification-container--unread")) {
      notifications[i].removeClass("notification-container--unread");
      notifications[i].addClass("notification-container--read");
      notifications[i].find(".notification__mark").addClass("read-noti");

      let no_of_unread = $(".notification-container--unread").length;
      $("#notification-count").text(no_of_unread);
    }
  }
});

$(".notification-container").click(function () {
  if ($(this).hasClass("notification-container--unread")) {
    $(this).removeClass("notification-container--unread");
    $(this).addClass("notification-container--read");
    $(this).find(".notification__mark").addClass("read-noti");

    let no_of_unread = $(".notification-container--unread").length;
    $("#notification-count").text(no_of_unread);
  }
});
