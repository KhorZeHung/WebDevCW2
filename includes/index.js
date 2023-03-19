function toggleNav(x) {
  if (document.getElementById("mySidenav").style.width === "200px") {
    closeNav(x);
  } else {
    openNav(x);
  }
}

function closeNav(x) {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementsByClassName(x)[0].classList.remove("change");
}

function openNav(x) {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementsByClassName(x)[0].classList.add("change");
}

window.onclick = function (event) {
  if (
    document.getElementById("mySidenav").style.width === "200px" &&
    !document.getElementsByClassName("headerNav")[0].contains(event.target)
  ) {
    closeNav("headerNav");
  }
};
//Show the modal if parameter mention

window.onload = () => {
  var searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("login") && searchParams.get("login") == 1) {
    var modal = document.getElementById("loginForm");
    modal.style.display = "block";
  }else if(searchParams.has("addAlbum") && searchParams.get("addAlbum") == 1){
    var modal = document.getElementById("addAlbum");
    modal.style.display = "block";
  }
};

var toggleDropDown = () => {
  var dropDownMenu = document.getElementById("albumDropDown");
  dropDownMenu.classList.toggle("show");
};