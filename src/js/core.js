import rrisdLogo from "url:../icons/rrisd-icon.png";

function initNavbar() {
  document.querySelector("head style").remove();
  let rrisdImage = document.querySelector("img.sg-banner-left");
  let navbarBrand = document.createElement("div");
  navbarBrand.classList.add("navbar-brand");
  let imageLink = navbarBrand.appendChild(document.createElement("a"));
  imageLink.classList.add("navbar-item");
  imageLink.href = "/HomeAccess/Home/WeekView";
  rrisdImage.height = "36";
  rrisdImage.width = "36";
  rrisdImage.style.maxHeight = "36px";
  let burger = navbarBrand.appendChild(document.createElement("a"));
  burger.role = "button";
  burger.classList.add("navbar-burger");
  burger.innerHTML = "<span></span><span></span><span></span>";
  rrisdImage.replaceWith(navbarBrand);
  rrisdImage.src = rrisdLogo;
  imageLink.appendChild(rrisdImage);
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    burger.parentElement.nextElementSibling.classList.toggle("is-active");
  });
  document.querySelector(".sg-banner").classList.add("navbar", "is-primary");
  document.querySelector(".sg-banner .sg-banner-right").classList.add("navbar-menu");
  document.querySelector(".sg-banner .sg-banner-right .sg-banner-menu-container").classList.add("navbar-start");
  document.querySelector(".sg-banner .sg-banner-right .sg-banner-menu-container .sg-banner-menu").style.display = "contents";
  document.querySelector(".sg-banner .sg-banner-right .sg-banner-menu-container .sg-menu-element-identity").classList.add("navbar-item", "has-dropdown", "is-hoverable");
  document.querySelector(".sg-banner .sg-banner-right .sg-banner-menu-container .sg-menu-element-identity > span").classList.add("navbar-link");
  document.querySelector(".sg-banner .sg-banner-right .sg-banner-menu-container .sg-menu-element-identity > .sg-banner-submenu").classList.add("navbar-dropdown");
  document.querySelectorAll(".sg-banner .sg-banner-right .sg-banner-menu-container .sg-menu-element-identity > .sg-banner-submenu > li").forEach(el => el.classList.add("navbar-item"));
  document.querySelector(".sg-banner .sg-banner-right .sg-banner-menu-container .sg-menu-element-logoff").classList.add("navbar-item");
  document.querySelector(".sg-banner .sg-banner-right .sg-banner-menu-container .sg-menu-element-logoff a").style.color = "var(--primary-invert)";
  document.querySelector(".sg-banner .sg-banner-right .sg-banner-chooser").classList.add("navbar-end", "is-align-self-center", "mr-3");
  document.querySelector(".sg-banner .sg-banner-right .sg-banner-chooser span.sg-add-change-student").classList.add("tag", "is-info", "is-align-self-center", "is-light", "mr-3");
  document.querySelector(".sg-banner .sg-banner-right .sg-banner-chooser i.sg-add-change-student").classList.add("button", "is-info");
  let homeIcon = document.createElement("span");
  homeIcon.classList.add("material-symbols-rounded", "icon");
  homeIcon.innerText = "home";
  document.querySelector("#hac-Home > span").prepend(homeIcon);
  let attendanceIcon = document.createElement("span");
  attendanceIcon.classList.add("material-symbols-rounded", "icon");
  attendanceIcon.innerText = "calendar_month";
  document.querySelector("#hac-Attendance > span").prepend(attendanceIcon);
  let classesIcon = document.createElement("span");
  classesIcon.classList.add("material-symbols-rounded", "icon");
  classesIcon.innerText = "school";
  document.querySelector("#hac-Classes > span").prepend(classesIcon);
  let gradesIcon = document.createElement("span");
  gradesIcon.classList.add("material-symbols-rounded", "icon");
  gradesIcon.innerText = "checklist";
  document.querySelector("#hac-Grades > span").prepend(gradesIcon);
  let registrationIcon = document.createElement("span");
  registrationIcon.classList.add("material-symbols-rounded", "icon");
  registrationIcon.innerText = "badge";
  document.querySelector("#hac-Registration > span").prepend(registrationIcon);
}

addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("link[rel=stylesheet]").forEach(el => el.remove());
  switch(location.pathname) {
    case "/HomeAccess/Account/LogOn": {
      if (new URL(location).searchParams.get("logonType") !== "RegisterAccessCode") {
        let forgotPassword = document.getElementById("ForgotPasswordLink");
        forgotPassword.innerText = "Forgot Password";
        forgotPassword.classList.add("button", "is-primary", "is-inline-block", "is-light", "mt-3", "is-small");
        forgotPassword.parentElement.style.display = "inline-block";
        let registrationLink = document.getElementById("RegistrationLink");
        registrationLink.innerText = "Register";
        registrationLink.classList.add("button", "is-secondary", "is-inline-block", "ml-3", "mt-3", "is-small");
        registrationLink.parentElement.parentElement.classList.add("is-pulled-right");
        let registrationAccessCode = document.getElementById("RegistrationAccessCodeLink");
        registrationAccessCode.innerText = "Register (access code)";
        registrationAccessCode.classList.add("button", "is-secondary", "is-inline-block", "is-light",  "mt-3", "is-small");
        registrationAccessCode.parentElement.classList.add("is-pulled-right");
      }
      let loginButton = document.querySelector("button[type=submit]#login");
      loginButton.classList.add("button", "is-primary");
      break;
    }
    case "/HomeAccess/Content/Register/ForgotCredentials.aspx": {
      document.querySelector("head style:last-child").remove();
      let labelUsername = document.getElementById("plnMain_lblUserName");
      let newLabelUsername = document.createElement("label");
      newLabelUsername.innerText = "Username";
      newLabelUsername.htmlFor = "plnMain_radUserName";
      labelUsername.replaceWith(newLabelUsername);
      let labelEmail = document.getElementById("plnMain_lblEmailAddress");
      let newLabelEmail = document.createElement("label");
      newLabelEmail.innerText = "Email";
      newLabelEmail.htmlFor = "plnMain_radEmailAddress";
      labelEmail.replaceWith(newLabelEmail);
      document.getElementById("plnMain_btnSubmit").classList.add("button", "is-primary");
      break;
    }
    case "/HomeAccess/Content/Register/Default2.aspx": {
      document.querySelector("head style:last-child").remove();
      let submitButton = document.querySelector("button#plnMain_Submit1");
      submitButton.classList.add("button", "is-primary");
      break;
    }
    case "/HomeAccess/Home/WeekView": {
      initNavbar();
      document.querySelectorAll("#average").forEach(el => {
        if (el.innerText === "100") el.classList.add("rainbow-text");
      });
      break;
    }
    case "/HomeAccess/Home/Calendar": {
      initNavbar();
      break;
    }
    case "/HomeAccess/Attendance/MonthView": {
      initNavbar();
      break;
    }
    case "/HomeAccess/Account/TimedOut": {
      document.getElementById("SignInButton").classList.add("button", "is-primary", "mt-3");
      break;
    }
  }
});