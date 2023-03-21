$(window).scroll(function () {
  var value = $(this).scrollTop() > 200 ? "block" : "none";
  $("#scrollTopBtn").css("display", value);
});

$("#scrollTopBtn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 100);
});

$(".headerNav").click(function () {
  $(".headerNav").toggleClass("change");
  $("#mySidenav").toggleClass("openSideNav");
});

$(document).click(function (event) {
  if (
    $("#mySidenav").css("width") === "200px" &&
    !$(".headerNav").is(event.target)
  ) {
    $(".headerNav").removeClass("change");
    $("#mySidenav").removeClass("openSideNav");
  }
});

$(document).ready(function () {
  var searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("login") && searchParams.get("login") == 1) {
    $("#loginForm").css("display", "block");
  } else if (
    searchParams.has("addAlbum") &&
    searchParams.get("addAlbum") == 1
  ) {
    $("#addAlbum").css("display", "block");
  }
});

var toggleDropDown = (ele) => {
  var dropDownMenu = document.getElementById(ele);
  dropDownMenu.classList.toggle("show");
};

var updateAlbumRadio = (toggleEle, value) => {
  toggleDropDown(toggleEle);
  if (document.getElementById("albumValue").textContent === "No Album Chosen") {
    document.getElementById("albumValue").innerText = value;
  } else {
    document.getElementById("albumValue").innerText = "No Album Chosen";
  }
};

$("#searchBar").focusin(function () {
  $("#searchResult").show();
  if ($(window).width() <= 600) {
    $("#logo").hide();
  }
});

$("#searchBar").focusout(function () {
  $("#searchResult").hide();
  $(this).val("");
  setTimeout(() => {
    $("#logo").show();
  }, 300);
});
