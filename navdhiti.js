const iconMobile = document.querySelector(".icon-mobile")
const mobileviewKk = document.querySelector(".mobile_view_kk")
iconMobile.addEventListener("click",function(){
  console.log("hai pgl")
  
  if (mobileviewKk.style.display === "none") {
    mobileviewKk.style.display = "flex";
  } else {
    mobileviewKk.style.display = "none";
  }

})

