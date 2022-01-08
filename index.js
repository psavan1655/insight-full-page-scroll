var current = $(window).scrollTop();
var total = $(window).height() - current;
var ele = $(".train");
var currPosition = ele.position().left + 360;
var trackLength = 300;

$(window).scroll(function (event) {
  current = $(window).scrollTop();
  console.log({ total: total, current: current });
  console.log((current / total) * 100);
  var newPosition = trackLength * (current / total);
  ele.css({ left: currPosition + newPosition + "px" });
});
