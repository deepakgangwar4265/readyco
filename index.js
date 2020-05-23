window.onscroll = function() {
  myfunction()
};
function myfunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170)
  {
    document.getElementById("air").style.display = "inline-block";
    document.getElementById("twojack").style.display = "inline-block";
    document.getElementById("wood").style.display = "inline-block";
    document.getElementById("aqua").style.display = "inline-block";

  } else {
    document.getElementById("air").style.display = "none";
    document.getElementById("twojack").style.display = "none";
    document.getElementById("wood").style.display = "none";
    document.getElementById("aqua").style.display = "none";
  }
}
