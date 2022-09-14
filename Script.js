"use strict";

// class lists for all the cards and relevant classes

const aquarius = document.querySelector(".aquarius");
const aquarius_para = document.querySelector(".aquarius-para");
const pisces = document.querySelector(".pisces");
const pisces_para = document.querySelector(".pisces-para");
const aries = document.querySelector(".aries");
const aries_para = document.querySelector(".aries-para");
const taurus = document.querySelector(".taurus");
const taurus_para = document.querySelector(".taurus-para");
const gemini = document.querySelector(".gemini");
const gemini_para = document.querySelector(".gemini-para");
const cancer = document.querySelector(".cancer");
const cancer_para = document.querySelector(".cancer-para");
const leo = document.querySelector(".leo");
const leo_para = document.querySelector(".leo-para");
const virgo = document.querySelector(".virgo");
const virgo_para = document.querySelector(".virgo-para");
const libra = document.querySelector(".libra");
const libra_para = document.querySelector(".libra-para");
const scorpio = document.querySelector(".scorpio");
const scorpio_para = document.querySelector(".scorpio-para");
const sagittarius = document.querySelector(".sagittarius");
const sagittarius_para = document.querySelector(".sagittarius-para");
const capricon = document.querySelector(".capricon");
const capricon_para = document.querySelector(".capricon-para");
const info_button = document.querySelector(".fixed-img-2");
const close_button = document.querySelector(".close-button");
const info = document.querySelector(".fixed-para");
const overlay = document.querySelector(".overlay");
const rotate_animation = document.querySelector(".rotate-animation");
const card = document.querySelector(".card-info");
const aquarius_background = document.querySelector(".background-aquarius");
const card_front = document.querySelector(".card-front");
const card_back = document.querySelector(".card-back");
const card_overlay = document.querySelector(".overlay-background");

//

// open and close for information button function
const open_info = function () {
  info.classList.remove("display-para");
  overlay.classList.remove("display-para");
};
const close_info = function () {
  info.classList.add("display-para");
  overlay.classList.add("display-para");
};

info_button.addEventListener("click", open_info);
close_button.addEventListener("click", close_info);
//

// open and close function for astrology cards
const open_card = function (open) {
  open.classList.add("rotate-animation");
};

const scale_overlay = function () {
  card_overlay.classList.add("scale");
};

const card_reveal = function (data) {
  data.classList.remove("opacity");
};
//

// card event listener functions

// aquarius

aquarius.addEventListener("click", function () {
  open_card(aquarius);
  scale_overlay();
  card_reveal(aquarius_para);
});

// pisces
pisces.addEventListener("click", function () {
  open_card(pisces);
  scale_overlay();
  card_reveal(pisces_para);
});

// aries
aries.addEventListener("click", function () {
  open_card(aries);
  scale_overlay();
  card_reveal(aries_para);
});

// taurus
taurus.addEventListener("click", function () {
  open_card(taurus);
  scale_overlay();
  card_reveal(taurus_para);
});

// gemini
gemini.addEventListener("click", function () {
  open_card(gemini);
  scale_overlay();
  card_reveal(gemini_para);
});

// cancer
cancer.addEventListener("click", function () {
  open_card(cancer);
  scale_overlay();
  card_reveal(cancer_para);
});

// leo
leo.addEventListener("click", function () {
  open_card(leo);
  scale_overlay();
  card_reveal(leo_para);
});

// virgo
virgo.addEventListener("click", function () {
  open_card(virgo);
  scale_overlay();
  card_reveal(virgo_para);
});

// libra
libra.addEventListener("click", function () {
  open_card(libra);
  scale_overlay();
  card_reveal(libra_para);
});

// scorpio
scorpio.addEventListener("click", function () {
  open_card(scorpio);
  scale_overlay();
  card_reveal(scorpio_para);
});

// sagittarius
sagittarius.addEventListener("click", function () {
  open_card(sagittarius);
  scale_overlay();
  card_reveal(sagittarius_para);
});

// capricon
capricon.addEventListener("click", function () {
  open_card(capricon);
  scale_overlay();
  card_reveal(capricon_para);
});

// card object data
const testDoc = document.querySelector(".testPara");
const test_function = function () {
  testDoc.classList.remove("hidden_test");
};
// test_function();
// aquarius
const aquarius_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: testDoc.classList.remove("hidden_test"),
    two: "Sagittarius",
  },
};
// pisces
const pisces_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: "Virgo",
    two: "Taurus",
  },
};
// aries
const aries_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: "Libra",
    two: "Leo",
  },
};
// taurus
const taurus_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: "Scorpio",
    two: "Cancer",
  },
};
// gemini
const gemini_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: "Sagittarius",
    two: "Aquarius",
  },
};
// cancer
const cancer_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: "Capricorn",
    two: "Taurus",
  },
};
// leo
const leo_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: "Aquarius",
    two: "Gemini",
  },
};
// virgo
const virgo_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: "Pisces",
    two: "Cancer",
  },
};
// libra
const libra_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: "Aries",
    two: "Sagittarius",
  },
};
// scorpio
const scorpio_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: " Taurus",
    two: "Cancer",
  },
};
// sagittarius
const sagittarius_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: "Gemini",
    two: "Aries",
  },
};
// capricon
const capricon_object = {
  variable_1: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_2: {
    one: "data1",
    two: "data2",
    three: "data3",
  },
  variable_3: {
    one: " Taurus",
    two: "Cancer",
  },
};

/// mixed message function

// function to extract
const Mixed_message_generator = function (data) {
  const variable_1 = data.variable_1;
  const variable_2 = data.variable_2;
  const variable_3 = data.variable_3;

  const output = function (vary) {
    const number = Math.trunc(Math.random() * 3) + 1;

    if (number === 1) {
      return vary.one;
    } else if (number === 2) {
      return vary.two;
    } else {
      return vary.three;
    }
  };
  const output_2 = function (vary2) {
    const number_2 = Math.trunc(Math.random() * 2) + 1;
    if (number_2 === 1) {
      return vary2.one;
    } else {
      return vary2.two;
    }
  };
  console.log(output(variable_1), output(variable_2), output_2(variable_3));
};
// Mixed_message_generator(aquarius_object);
