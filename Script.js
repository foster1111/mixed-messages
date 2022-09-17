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

/// mixed message function

// function to extract prediction
const Mixed_message_generator = function (data) {
  // aquarius data
  const aquariusVariable_1_1 = document.querySelector();
  const aquariusVariable_1_2 = document.querySelector();
  const aquariusVariable_1_3 = document.querySelector();
  const aquariusVariable_2_1 = document.querySelector();
  const aquariusVariable_2_2 = document.querySelector();
  const aquariusVariable_2_3 = document.querySelector();
  const aquariusVariable_3_1 = document.querySelector();
  const aquariusVariable_3_2 = document.querySelector();

  // pisces data
  const piscesVariable_1_1 = document.querySelector();
  const piscesVariable_1_2 = document.querySelector();
  const piscesVariable_1_3 = document.querySelector();
  const piscesVariable_2_1 = document.querySelector();
  const piscesVariable_2_2 = document.querySelector();
  const piscesVariable_2_3 = document.querySelector();
  const piscesVariable_3_1 = document.querySelector();
  const piscesVariable_3_2 = document.querySelector();

  // aquarius data
  const ariesVariable_1_1 = document.querySelector();
  const ariesVariable_1_2 = document.querySelector();
  const ariesVariable_1_3 = document.querySelector();
  const ariesVariable_2_1 = document.querySelector();
  const ariesVariable_2_2 = document.querySelector();
  const ariesVariable_2_3 = document.querySelector();
  const ariesVariable_3_1 = document.querySelector();
  const ariesVariable_3_2 = document.querySelector();

  // aquarius data
  const taurusVariable_1_1 = document.querySelector();
  const taurusVariable_1_2 = document.querySelector();
  const taurusVariable_1_3 = document.querySelector();
  const taurusVariable_2_1 = document.querySelector();
  const taurusVariable_2_2 = document.querySelector();
  const taurusVariable_2_3 = document.querySelector();
  const taurusVariable_3_1 = document.querySelector();
  const taurusVariable_3_2 = document.querySelector();

  // aquarius data
  const geminiVariable_1_1 = document.querySelector();
  const geminiVariable_1_2 = document.querySelector();
  const geminiVariable_1_3 = document.querySelector();
  const geminiVariable_2_1 = document.querySelector();
  const geminiVariable_2_2 = document.querySelector();
  const geminiVariable_2_3 = document.querySelector();
  const geminiVariable_3_1 = document.querySelector();
  const geminiVariable_3_2 = document.querySelector();

  // aquarius data
  const cancerVariable_1_1 = document.querySelector();
  const cancerVariable_1_2 = document.querySelector();
  const cancerVariable_1_3 = document.querySelector();
  const cancerVariable_2_1 = document.querySelector();
  const cancerVariable_2_2 = document.querySelector();
  const cancerVariable_2_3 = document.querySelector();
  const cancerVariable_3_1 = document.querySelector();
  const cancerVariable_3_2 = document.querySelector();

  // aquarius data
  const leoVariable_1_1 = document.querySelector();
  const leoVariable_1_2 = document.querySelector();
  const leoVariable_1_3 = document.querySelector();
  const leoVariable_2_1 = document.querySelector();
  const leoVariable_2_2 = document.querySelector();
  const leoVariable_2_3 = document.querySelector();
  const leoVariable_3_1 = document.querySelector();
  const leoVariable_3_2 = document.querySelector();

  // aquarius data
  const virgoVariable_1_1 = document.querySelector();
  const virgoVariable_1_2 = document.querySelector();
  const virgoVariable_1_3 = document.querySelector();
  const virgoVariable_2_1 = document.querySelector();
  const virgoVariable_2_2 = document.querySelector();
  const virgoVariable_2_3 = document.querySelector();
  const virgoVariable_3_1 = document.querySelector();
  const virgoVariable_3_2 = document.querySelector();

  // aquarius data
  const libraVariable_1_1 = document.querySelector();
  const libraVariable_1_2 = document.querySelector();
  const libraVariable_1_3 = document.querySelector();
  const libraVariable_2_1 = document.querySelector();
  const libraVariable_2_2 = document.querySelector();
  const libraVariable_2_3 = document.querySelector();
  const libraVariable_3_1 = document.querySelector();
  const libraVariable_3_2 = document.querySelector();

  // aquarius data
  const scorpioVariable_1_1 = document.querySelector();
  const scorpioVariable_1_2 = document.querySelector();
  const scorpioVariable_1_3 = document.querySelector();
  const scorpioVariable_2_1 = document.querySelector();
  const scorpioVariable_2_2 = document.querySelector();
  const scorpioVariable_2_3 = document.querySelector();
  const scorpioVariable_3_1 = document.querySelector();
  const scorpioVariable_3_2 = document.querySelector();

  // aquarius data
  const sagittariusVariable_1_1 = document.querySelector();
  const sagittariusVariable_1_2 = document.querySelector();
  const sagittariusVariable_1_3 = document.querySelector();
  const sagittariusVariable_2_1 = document.querySelector();
  const sagittariusVariable_2_2 = document.querySelector();
  const sagittariusVariable_2_3 = document.querySelector();
  const sagittariusVariable_3_1 = document.querySelector();
  const sagittariusVariable_3_2 = document.querySelector();

  // aquarius data
  const capriconVariable_1_1 = document.querySelector();
  const capriconVariable_1_2 = document.querySelector();
  const capriconVariable_1_3 = document.querySelector();
  const capriconVariable_2_1 = document.querySelector();
  const capriconVariable_2_2 = document.querySelector();
  const capriconVariable_2_3 = document.querySelector();
  const capriconVariable_3_1 = document.querySelector();
  const capriconVariable_3_2 = document.querySelector();

  const aquariusOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return aquariusVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return aquariusVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return aquariusVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return aquariusVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return aquariusVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return aquariusVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return aquariusVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return aquariusVariable_3_2.classList.remove("hidden_test");
    }
  };

  const piscesOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return piscesVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return piscesVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return piscesVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return piscesVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return piscesVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return piscesVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return piscesVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return piscesVariable_3_2.classList.remove("hidden_test");
    }
  };

  const ariesOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return ariesVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return ariesVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return ariesVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return ariesVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return ariesVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return ariesVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return ariesVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return ariesVariable_3_2.classList.remove("hidden_test");
    }
  };

  const taurusOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return taurusVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return taurusVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return taurusVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return taurusVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return taurusVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return taurusVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return taurusVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return taurusVariable_3_2.classList.remove("hidden_test");
    }
  };

  const geminiOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return geminiVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return geminiVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return geminiVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return geminiVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return geminiVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return geminiVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return geminiVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return geminiVariable_3_2.classList.remove("hidden_test");
    }
  };

  const cancerOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return cancerVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return cancerVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return cancerVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return cancerVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return cancerVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return cancerVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return cancerVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return cancerVariable_3_2.classList.remove("hidden_test");
    }
  };

  const leoOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return leoVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return leoVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return leoVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return leoVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return leoVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return leoVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return leoVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return leoVariable_3_2.classList.remove("hidden_test");
    }
  };

  const virgoOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return virgoVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return virgoVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return virgoVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return virgoVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return virgoVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return virgoVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return virgoVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return virgoVariable_3_2.classList.remove("hidden_test");
    }
  };

  const libraOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return libraVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return libraVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return libraVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return libraVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return libraVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return libraVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return libraVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return libraVariable_3_2.classList.remove("hidden_test");
    }
  };

  const scorpioOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return scorpioVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return scorpioVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return scorpioVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return scorpioVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return scorpioVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return scorpioVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return scorpioVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return scorpioVariable_3_2.classList.remove("hidden_test");
    }
  };

  const sagittariusOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return sagittariusVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return sagittariusVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return sagittariusVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return sagittariusVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return sagittariusVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return sagittariusVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return sagittariusVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return sagittariusVariable_3_2.classList.remove("hidden_test");
    }
  };

  const capriconOutput = function (vary) {
    // Number generator
    const number = Math.trunc(Math.random() * 3) + 1;
    const number_2 = Math.trunc(Math.random() * 2) + 1;

    // Variable 1
    if (number === 1 && vary === "variable_1") {
      return capriconVariable_1_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_1") {
      return capriconVariable_1_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_1") {
      return capriconVariable_1_3.classList.remove("hidden_test");
    }

    // Variable 2
    else if (number === 1 && vary === "variable_2") {
      return capriconVariable_2_1.classList.remove("hidden_test");
    } else if (number === 2 && vary === "variable_2") {
      return capriconVariable_2_2.classList.remove("hidden_test");
    } else if (number === 3 && vary === "variable_2") {
      return capriconVariable_2_3.classList.remove("hidden_test");

      // Variable 3
    } else if (number_2 === 1 && vary === "variable_3") {
      return capriconVariable_3_1.classList.remove("hidden_test");
    } else if (number_2 === 2 && vary === "variable_3") {
      return capriconVariable_3_2.classList.remove("hidden_test");
    }
  };

  if (data === aquarius) {
    aquariusOutput("variable_1");
    aquariusOutput("variable_2");
    aquariusOutput("variable_3");
  } else if (data === pisces) {
    piscesOutput("variable_1");
    piscesOutput("variable_2");
    piscesOutput("variable_3");
  } else if (data === aries) {
    ariesOutput("variable_1");
    ariesOutput("variable_2");
    ariesOutput("variable_3");
  } else if (data === taurus) {
    taurusOutput("variable_1");
    taurusOutput("variable_2");
    taurusOutput("variable_3");
  } else if (data === gemini) {
    geminiOutput("variable_1");
    geminiOutput("variable_2");
    geminiOutput("variable_3");
  } else if (data === cancer) {
    cancerOutput("variable_1");
    cancerOutput("variable_2");
    cancerOutput("variable_3");
  } else if (data === leo) {
    leoOutput("variable_1");
    leoOutput("variable_2");
    leoOutput("variable_3");
  } else if (data === virgo) {
    virgoOutput("variable_1");
    virgoOutput("variable_2");
    virgoOutput("variable_3");
  } else if (data === libra) {
    libraOutput("variable_1");
    libraOutput("variable_2");
    libraOutput("variable_3");
  } else if (data === scorpio) {
    scorpioOutput("variable_1");
    scorpioOutput("variable_2");
    scorpioOutput("variable_3");
  } else if (data === sagittarius) {
    sagittariusOutput("variable_1");
    sagittariusOutput("variable_2");
    sagittariusOutput("variable_3");
  } else if (data === capricon) {
    capriconOutput("variable_1");
    capriconOutput("variable_2");
    capriconOutput("variable_3");
  }
};
Mixed_message_generator(aries);
