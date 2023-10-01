document.querySelector(".bar").addEventListener("click", () => {
  document.body.classList.add("click");
  document.querySelector(".mobile").classList.add("click");
  document.querySelector(".ovrflow").style.display = "block";
  let bak = document.querySelector(".mobile .head i");
  bak.classList.add("rotate");
  document.querySelector(".ovrflow").style.display = "block";
  bak.addEventListener("click", () => {
    bak.classList.remove("rotate");
    document.querySelector(".mobile").classList.remove("click");
    document.querySelector(".ovrflow").style.display = "none";
    document.body.classList.remove("click");
  });
});

let link = document.querySelectorAll(".mp ");

link.forEach((i) => {
  i.addEventListener("click", (e) => {
    link.forEach((i) => {
      i.classList.add("actve1");
    });
    e.currentTarget.classList.remove("actve1");
    e.currentTarget.classList.toggle("actve");
    link.forEach((i) => {
      if (i.classList.contains("actve1")) {
        i.classList.remove("actve");
      }
    });
  });
});

let navbar = document.querySelector("header");
let progress = document.querySelector(".progress");
window.addEventListener("scroll", () => {
  if (this.scrollY > 50) {
    navbar.classList.add("sticky");
    progress.classList.add("active");
  } else {
    navbar.classList.remove("sticky");
    progress.classList.remove("active");
  }
});

let neam = document.querySelectorAll(".service-bar  h1");

let service = document.querySelector(".service-bar");
let sarat = false;
window.onscroll = function () {
  let t = service.offsetTop;
  let t1 = service.scrollHeight;
  let t2 = this.innerHeight;
  let t3 = this.scrollY;

  if (t3 >= t + t1 - t2) {
    if (!sarat) {
      neam.forEach((n) => startCount(n));
    }
    sarat = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let Count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(Count);
    }
  }, 2500 / goal);
}

let img = document.querySelectorAll(".Solutions .info ");
img.forEach((i) => {
  i.addEventListener("click", (e) => {
    console.log(i);
    let ovr = document.createElement("div");
    ovr.className =
      " fixed w-full h-full top-0 left-0 bg-black  opacity-70	 z-1000 ";
    document.body.appendChild(ovr);
    let div = document.createElement("div");
    div.className =
      "fixed z-1100 top-1/2  left-1/2 translate-y-center translate-x-center";
    let video = document.createElement("video");
    video.src = "img/video.mp4";
    video.setAttribute("controls", "");
    let span = document.createElement("span");
    span.textContent = "x";
    span.className =
      "x  absolute text-4xl cursor-pointer	text-white opacity-50	  ";
    div.appendChild(span);
    div.appendChild(video);
    document.body.appendChild(div);
    span.addEventListener("click", () => {
      ovr.remove();
      div.remove();
    });
  });
});

var swiper = new Swiper(".test", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1496: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".pr", {
  slidesPerView: 5,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1240: {
      slidesPerView: 5,
    },
  },
});

let circle = document.querySelector("circle");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scroll = document.documentElement.scrollTop;
  let a = 138 - (scroll / height) * 140;
  if (a < 2) {
    a = 0;
  }
  circle.setAttribute("stroke-dashoffset", a);
});

progress.onclick = function () {
  const duration = 200; // مدة التمرير البطيء (200 ميلي ثانية)
  const scrollStep = 10; // عدد البكسلات للتمرير في كل خطوة
  const scrollInterval = setInterval(function () {
    const currentPosition = document.documentElement.scrollTop;
    if (currentPosition === 0) {
      clearInterval(scrollInterval); // توقف التمرير بعد الوصول إلى الأعلى
    } else {
      window.scrollTo(0, currentPosition - scrollStep);
    }
  }, duration / (200 / scrollStep)); // حساب عدد الخطوات بناءً على مدة التمرير وعدد البكسلات لكل خطوة
  setTimeout(function () {
    clearInterval(scrollInterval); // توقف التمرير البطيء
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    }); // التمرير السلس للعودة إلى الأعلى
  }, duration);
};
