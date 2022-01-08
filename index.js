var globalWheelCount = 0;
const pg1TxtBx1 =
  "<img src='./assets/whiteLogo.png' height='30px' width='100px'/> <br /><p class='pg1-contura-txt'> CONTOURA<sup style='font-size: 15px; top: -1rem'> &#174;</sup> </p>";
const pg1TxtBx2 =
  "  <div class='pg1-anatomically-txt-after-animate'>    ANATOMICALLY-SHAPED DESIGN <br />    <p class='pg1-anatomically-desc-txt'>      It's all in the name. INSITE<sup> &#174;</sup> Contoura      <sup> &#174;</sup> insoles were developed using our full patented,      anatomical shape algorithm, matching the underfoot contours for the      majority of footwear consumers.   </p>  </div> ";

const pg1Img1 =
  "<div class='covervid-wrapper'>  <img src='./assets/01.png' alt='Sole' class='pg1-img' /></div>";

const pg2TxtBx2 =
  "  <div class='position-relative'> <div class='pg2-dynamic-txt'>    DYNAMIC HEEL CUP AND ARCH SUPPORT <br />    <p class='pg1-anatomically-desc-txt'>The insole design is based on more than 120,000 prescribed footscans, effectiveky fitting 85% of wearers. With podiatrist-designed arch support, a stabilizing heel cup, and high rebound with shape-retention foam, Contoura <sup> &#174;</sup> offers maximum comfort, performance, and support, tailored to your midsole design.</p>  </div> </div>";

const pg2Vid2 =
  "<div class='covervid-wrapper2'> <video class='vid01' poster='./assets/02.png' poster='./assets/02.png' autoplay muted preload='auto'> <source src='./assets/videos/V1.webm' type='video/webm'/></video></div>";

const pg3Vid3 =
  "<div class='covervid-wrapper3'> <video class='vid01' poster='./assets/03.png' poster='./assets/02.png' autoplay muted preload='auto'> <source src='./assets/videos/V2.webm' type='video/webm' /></video></div>";

const pg3TxtBx3 =
  "<div class='position-relative'><div class='pg3-sustainable-txt'>SUSTAINABLE MATERIALS <br />  <p class='pg1-anatomically-desc-txt'>    Contoura <sup> &#174;</sup> features innovative polyurethane (PU) foam technology, which not only supports its ergonomic shape, but results in dramatic material savings. Because the foam is poured into a mold rather than into sheets that are later cut and discarded. we use substantially less amterial, power, and natural resources.  </p></div>";

function detectMouseWheelDirection(e) {
  var delta = null,
    direction = false;
  if (!e) {
    // if the event is not provided, we get it from the window object
    e = window.event;
  }
  if (e.wheelDelta) {
    // will work in most cases
    delta = e.wheelDelta / 60;
  } else if (e.detail) {
    // fallback for Firefox
    delta = -e.detail / 2;
  }
  if (delta !== null) {
    direction = delta > 0 ? "up" : "down";
  }

  return direction;
}

function handleMouseWheelDirection(direction) {
  if (direction == "down") {
    // if(globalWheelCount === lastnumber) // add number of last scroll
    globalWheelCount += 1;
    console.log(globalWheelCount);
    if (globalWheelCount === 1) {
      $(".pg1-txt1").html(pg2TxtBx2);
      $(".pg1-anatomically-txt").animate({ opacity: "hide" });
      $(".flgshpConsole1").animate({ opacity: "hide" });
      $("#img-container").html(pg2Vid2);
    }
    if (globalWheelCount === 2) {
      $("#img-container").html(pg3Vid3);
      $(".pg1-txt1").html(pg3TxtBx3);
    }
    if (globalWheelCount === 3) {
      $("#img-container").html(pg2Vid2);
      $(".pg1-txt1").html(pg2TxtBx2);
    }
  } else if (direction == "up") {
    if (globalWheelCount === 0) {
      globalWheelCount = 0;
    } else {
      globalWheelCount -= 1;
    }
    if (globalWheelCount === 0) {
      $(".one").animate({ left: "0", opacity: "show" });
      $(".flgshpConsole1").animate({ opacity: "show" });
      $(".pg1-anatomically-txt").animate({ opacity: "show" }).html(pg1TxtBx2);
      $("#img-container").html(pg1Img1);
      $(".pg1-txt1").html(pg1TxtBx1);
    }
    if (globalWheelCount === 1) {
      $("#img-container").html(pg2Vid2);
      $(".pg1-txt1").html(pg2TxtBx2);
    }
    console.log("testd demo");
  } else {
    // this means the direction of the mouse wheel could not be determined
  }
}
document.onmousewheel = function (e) {
  handleMouseWheelDirection(detectMouseWheelDirection(e));
};
if (window.addEventListener) {
  document.addEventListener("DOMMouseScroll", function (e) {
    handleMouseWheelDirection(detectMouseWheelDirection(e));
  });
}

// Scroll limiter

// Tmp
$("#btn2").click(function () {
  $("#test2").html("<b>Hello world!</b>");
});
