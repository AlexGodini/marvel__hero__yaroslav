const heroBlock = document.querySelector(".nav");
const hero = document.querySelectorAll(".nav__link");
const navImg = document.querySelectorAll(".img");
const shopImg = document.querySelectorAll(".shop__img");
const textChapter = document.querySelector(".text__chapter");
const textText = document.querySelector(".text__text");

const heroObject = {
  Thor: [
    "../img/Comics/PNG/Tchor/01.jpg",
    "../img/Comics/PNG/Tchor/02.jpg",
    "../img/Comics/PNG/Tchor/03.jpg",
    "../img/Comics/PNG/Tchor/04.jpg",
    "../img/Comics/PNG/Tchor/05.jpg",
    "../img/Comics/PNG/Tchor/06.jpg",
    "../img/Comics/PNG/Tchor/07.jpg",
    "../img/Comics/PNG/Tchor/08.jpg",
    "The shared storytelling palette known as the Marvel universe was unveiled in 1961, when Goodman responded to the growing interest in superhero books by commissioning writer Stan Lee and artist Jack Kirby to create the Fantastic Four. With the release of Fantastic Four no. 1 (November 1961), readers were introduced to a superheroic setting that was, nevertheless, rooted in the real world. Lee and Kirby attempted to make their comic book characters more original by allowing them to interact with each other in a realistic fashion, including heroes often fighting or arguing with each other. This trend continued with a flood of other superhero characters introduced by Marvel Comics during the early 1960s, including Spider-Man, the Incredible Hulk, and the X-Men. Lee wrote the majority of Marvel’s books during that time, and Jack Kirby and Steve Ditko were the most important and influential artists.",
    "",
  ],
  Deadpool: [
    "../img/Comics/PNG/Deadpool/01.jpg",
    "../img/Comics/PNG/Deadpool/02.jpg",
    "../img/Comics/PNG/Deadpool/03.jpg",
    "../img/Comics/PNG/Deadpool/04.jpg",
    "../img/Comics/PNG/Deadpool/05.jpg",
    "../img/Comics/PNG/Deadpool/06.jpg",
    "../img/Comics/PNG/Deadpool/07.jpg",
    "../img/Comics/PNG/Deadpool/08.jpg",
    "",
    "",
  ],
  "Captain America": [
    "../img/Comics/PNG/CaptainAmerica/01.jpg",
    "../img/Comics/PNG/CaptainAmerica/02.jpg",
    "../img/Comics/PNG/CaptainAmerica/03.jpg",
    "../img/Comics/PNG/CaptainAmerica/04.jpg",
    "../img/Comics/PNG/CaptainAmerica/05.jpg",
    "../img/Comics/PNG/CaptainAmerica/06.jpg",
    "../img/Comics/PNG/CaptainAmerica/07.jpg",
    "../img/Comics/PNG/CaptainAmerica/08.jpg",
    "",
    "",
  ],
  Hulk: [
    "../img/Comics/PNG/Hulk/01.jpg",
    "../img/Comics/PNG/Hulk/02.jpg",
    "../img/Comics/PNG/Hulk/03.jpg",
    "../img/Comics/PNG/Hulk/04.jpg",
    "../img/Comics/PNG/Hulk/05.jpg",
    "../img/Comics/PNG/Hulk/06.jpg",
    "../img/Comics/PNG/Hulk/07.jpg",
    "../img/Comics/PNG/Hulk/08.jpg",
    "",
    "",
  ],
  "Iron-man": [
    "../img/Comics/PNG/IronMan/01.jpg",
    "../img/Comics/PNG/IronMan/02.jpg",
    "../img/Comics/PNG/IronMan/03.jpg",
    "../img/Comics/PNG/IronMan/04.jpg",
    "../img/Comics/PNG/IronMan/05.jpg",
    "../img/Comics/PNG/IronMan/06.jpg",
    "../img/Comics/PNG/IronMan/07.jpg",
    "../img/Comics/PNG/IronMan/08.jpg",
    "",
    "",
  ],
};

const changeMain = (heroValue, heroValueSrting) => {
  textChapter.textContent = heroValueSrting;
  textText.textContent = heroObject[heroValue][8];
  shopImg.forEach((item, i) => {
    item.setAttribute("src", heroObject[heroValue][i]);
  });
};

hero.forEach((item, i, arr) => {
  if (document.title === "HERO")
    item.addEventListener("click", (e) => {
      e.preventDefault();

      let heroValue = item.getAttribute("value");
      let heroValueSrting = String(heroValue.toUpperCase());

      changeMain(heroValue, heroValueSrting);
    });
});

hero.forEach((item, i, arr) => {
  if (item.getAttribute("value") === document.title) {
    item.classList.add("visible");

    if (arr[2] != item) {
      arr[2].insertAdjacentElement("afterend", item);
    }

    if (i == 3 || i == 4) {
      arr[2].insertAdjacentElement("beforebegin", item);
    }
  }

  if (item.getAttribute("value") !== document.title) {
  }
});

// hero.forEach((item, i, arr) => {
//   item.style.order = `${i}`;

//   item.addEventListener("click", (e) => {
//     let targetVis = document.querySelector(".nav__link.visible");
//     let eTargetOrder = getComputedStyle(e.target).order;
//     console.log("eTargetOrder: ", eTargetOrder);

//     if (targetVis) {
//       targetVis.classList.remove("visible");
//       let orderRemVis = (targetVis.style.order = eTargetOrder);
//       console.log("orderRemVis: ", orderRemVis);
//     }

//     item.classList.add("visible");
//     item.style.order = "2";
//     let orderAddVis = (item.style.order = "2");
//     console.log("orderAddVis: ", orderAddVis);

//     let itemOrder = getComputedStyle(item).order;
//     console.log("itemOrder: ", itemOrder);

    //  let target = e.target;

    //  arr.forEach((item, i, arr) => {

    //    if (i == 0 || i == 1) {
    //      arr[2].insertAdjacentElement("afterend", target);
    //    }

    //    if (i == 3 || i == 4) {
    // 		arr[2].insertAdjacentElement("beforebegin", target);
    //    }
    //  });
