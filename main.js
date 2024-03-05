// base preps
let result_txt = "";
let time_remained = true;
let fw_ask_q = 1;
let current_topic = undefined;
let current_question = 404;
let current_answer = undefined;
let asked_types = [];
let asked_questions = [];
let asked_topics = [];
let numberof_asked_questions = 0;
let answered_questions = 0;
let uncorrect_answers = 0;
let unanswered_questions = 0;
let amooi = 0;
let txt = "جواب را وارد کنید.";
let formula = "";
let nam = "";

// prep tops
let chosen_topics = [];
let chosen_type_fw = "";
let chosen_type_aa = "";
function handleClickFwDoFlenafle(checkbox) {
  if (checkbox.checked) {
    if (!("FwDoFlenafle" in chosen_topics)) {
      chosen_topics.push("FwDoFlenafle");
    }
  } else {
    chosen_topics.pop("FwDoFlenafle");
  }
}
function handleClickFwDoNaflenafle(checkbox) {
  if (checkbox.checked) {
    if (!("FwDoNalenafle" in chosen_topics)) {
      chosen_topics.push("FwDoNalenafle");
    }
  } else {
    chosen_topics.pop("FwDoNalenafle");
  }
}
function handleClickFwSeHidroxide(checkbox) {
  if (checkbox.checked) {
    if (!("FwSeHidroxide" in chosen_topics)) {
      chosen_topics.push("FwSeHidroxide");
    }
  } else {
    chosen_topics.pop("FwSeHidroxide");
  }
}
function handleClickFwSeAsidOxygeneDar(checkbox) {
  if (checkbox.checked) {
    if (!("FwSeAsidOxygeneDar" in chosen_topics)) {
      chosen_topics.push("FwSeAsidOxygeneDar");
    }
  } else {
    chosen_topics.pop("FwSeAsidOxygeneDar");
  }
}
function handleClickFwSeAsidBiOxygene(checkbox) {
  if (checkbox.checked) {
    if (!("FwSeAsidBiOxygene" in chosen_topics)) {
      chosen_topics.push("FwSeAsidBiOxygene");
    }
  } else {
    chosen_topics.pop("FwSeAsidBiOxygene");
  }
}
function handleClickFwSeNamak(checkbox) {
  if (checkbox.checked) {
    if (!("FwSeNamak" in chosen_topics)) {
      chosen_topics.push("FwSeNamak");
    }
  } else {
    chosen_topics.pop("FwSeNamak");
  }
}
function handleClickAaAsli(checkbox) {
  if (checkbox.checked) {
    if (!("AaAsli" in chosen_topics)) {
      chosen_topics.push("AaAsli");
    }
  } else {
    chosen_topics.pop("AaAsli");
  }
}
function handleClickAaVasete(checkbox) {
  if (checkbox.checked) {
    if (!("AaVasete" in chosen_topics)) {
      chosen_topics.push("AaVasete");
    }
  } else {
    chosen_topics.pop("AaVasete");
  }
}
function handeClickFbn(radio) {
  if (radio.checked) {
    chosen_type_fw = "Fbn";
  }
}
function handeClickNbf(radio) {
  if (radio.checked) {
    chosen_type_fw = "Nbf";
  }
}
function handeClickBoth(radio) {
  if (radio.checked) {
    chosen_type_fw = "Both";
  }
}
function handleEnnndClicked() {
  if (amooi > 0) {
    time_remained = false;
    // ennndClicked();
  } else {
    // document.querySelector("#ennnd").style.cursor = "pointer";
  }
}
function handleClickMabahesFw(switchedon) {
  if (switchedon.checked) {
    document.querySelector(".q-flenafle-inp").checked = "checked";
    document.querySelector(".q-naflenafle-inp").checked = "checked";
    document.querySelector(".q-hidroxide-inp").checked = "checked";
    document.querySelector(".q-asidoxygenedar-inp").checked = "checked";
    document.querySelector(".q-asidbioxygene-inp").checked = "checked";
    document.querySelector(".q-namak-inp").checked = "checked";
    handleClickFwDoFlenafle(document.querySelector(".q-flenafle-inp"));
    handleClickFwDoNaflenafle(document.querySelector(".q-naflenafle-inp"));
    handleClickFwSeHidroxide(document.querySelector(".q-hidroxide-inp"));
    handleClickFwSeAsidOxygeneDar(
      document.querySelector(".q-asidoxygenedar-inp")
    );
    handleClickFwSeAsidBiOxygene(
      document.querySelector(".q-asidbioxygene-inp")
    );
    handleClickFwSeNamak(document.querySelector(".q-namak-inp"));
  } else {
    document.querySelector(".q-flenafle-inp").click();
    document.querySelector(".q-naflenafle-inp").click();
    document.querySelector(".q-hidroxide-inp").click();
    document.querySelector(".q-asidoxygenedar-inp").click();
    document.querySelector(".q-asidbioxygene-inp").click();
    document.querySelector(".q-namak-inp").click();
    handleClickFwDoFlenafle(document.querySelector(".q-flenafle-inp"));
    handleClickFwDoNaflenafle(document.querySelector(".q-naflenafle-inp"));
    handleClickFwSeHidroxide(document.querySelector(".q-hidroxide-inp"));
    handleClickFwSeAsidOxygeneDar(
      document.querySelector(".q-asidoxygenedar-inp")
    );
    handleClickFwSeAsidBiOxygene(
      document.querySelector(".q-asidbioxygene-inp")
    );
    handleClickFwSeNamak(document.querySelector(".q-namak-inp"));
  }
}
function handleClickMabahesAa(switchedon) {
  if (switchedon.checked) {
    document.querySelector(".q-aaasli-inp").checked = "checked";
    document.querySelector(".q-aavasete-inp").checked = "checked";
    handleClickAaAsli(document.querySelector(".q-aaasli-inp"));
    handleClickAaVasete(document.querySelector(".q-aavasete-inp"));
  } else {
    document.querySelector(".q-aaasli-inp").click();
    document.querySelector(".q-aavasete-inp").click();
    handleClickAaAsli(document.querySelector(".q-aaasli-inp"));
    handleClickAaVasete(document.querySelector(".q-aavasete-inp"));
  }
}

// needed base funs
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
function romanize(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
function hasNumber(str) {
  return /\d/.test(str);
}

// get QandA funs
function fleNafle() {
  felezat = {
    0: ["Li", "لیتیم", [""], "Lithium"],
    1: ["Na", "سدیم", [""], "Sodium"],
    2: ["K", "پتاسیم", [""], "Potassium"],
    3: ["Rb", "روبیدیم", [""], "Rubidium"],
    4: ["Cs", "سزیم", [""], "Cesium"],

    5: ["Be", "بریلیم", ["2"], "Beryllium"],
    6: ["Mg", "منیزیم", ["2"], "Magnesium"],
    7: ["Ca", "کلسیم", ["2"], "Calcium"],
    8: ["Sr", "استرانسیم", ["2"], "Strontium"],
    9: ["Ba", "باریم", ["2"], "Barium"],

    10: ["B", "بور", ["3"], "Boron"],
    11: ["Al", "آلومینیم", ["3"], "Aluminum"],

    12: ["Sn", "قلع", ["2", "4"], "Tin"],
    13: ["Pb", "سرب", ["2", "4"], "Lead"],

    14: ["Ag", "نقره", [""], "Silver"],
    15: ["Hg", "جیوه", ["", "2"], "Mercury"],
    16: ["Cu", "مس", ["", "2"], "Copper"],
    17: ["Zn", "روی", ["2"], "Zinc"],
    18: ["Cd", "کادمیم", ["2"], "Cadmium"],
    19: ["Mn", "منگنز", ["2", "3", "4", "6", "7"], "Manganese"],
    20: ["Fe", "آهن", ["2", "3"], "Iron"],
    21: ["Ni", "نیکل", ["2", "3"], "Nickel"],
    22: ["Co", "کبالت", ["2", "3"], "Cobalt"],
    23: ["Cr", "کروم", ["2", "3", "6"], "Chromium"],
    24: ["NH4", "آمونیوم", [""], "Amunium"],
  };

  nafelezat = {
    0: ["Br", "برمید", [""]],
    1: ["Cl", "کلرید", [""]],
    2: ["F", "فلوئورید", [""]],
    3: ["O", "اکسید", ["2"]],
    4: ["S", "سولفید", ["2"]],
    5: ["P", "فسفید", ["3"]],
    6: ["N", "نیترید", ["3"]],
    7: ["I", "یدید", [""]],
  };
  const chosen_felez = felezat[randomNumber(0, 23)];
  const chosen_nafelez = nafelezat[randomNumber(0, 7)];

  let namad_felez = chosen_felez[0];
  let namad_nafelez = chosen_nafelez[0];

  const esm_felez = chosen_felez[1];
  const esm_nafelez = chosen_nafelez[1];

  const tedad_zarfiat_felez = chosen_felez[2].length;

  const tedad_zarfiat_felez_minus_one = tedad_zarfiat_felez - 1;
  let zarfiat_felez =
    chosen_felez[2][randomNumber(0, tedad_zarfiat_felez_minus_one)];
  let zarfiat_nafelez = chosen_nafelez[2][0];

  let int_zarfiat_felez = 1;
  if (zarfiat_felez == "") {
    int_zarfiat_felez = 1;
  } else {
    int_zarfiat_felez = parseInt(zarfiat_felez);
  }

  let int_zarfiat_nafelez = 1;
  if (zarfiat_nafelez == "") {
    int_zarfiat_nafelez = 1;
  } else {
    int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
  }

  if (chosen_felez[2].length != 1) {
    nam =
      esm_felez +
      "(" +
      romanize(parseInt(int_zarfiat_felez)) +
      ")" +
      " " +
      esm_nafelez;
  } else {
    nam = esm_felez + " " + esm_nafelez;
  }

  if (zarfiat_felez == zarfiat_nafelez) {
    zarfiat_felez = "";
    zarfiat_nafelez = "";
  }

  int_zarfiat_felez = 1;
  if (zarfiat_felez == "") {
    int_zarfiat_felez = 1;
  } else {
    int_zarfiat_felez = parseInt(zarfiat_felez);
  }

  int_zarfiat_nafelez = 1;
  if (zarfiat_nafelez == "") {
    int_zarfiat_nafelez = 1;
  } else {
    int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
  }

  if (gcd(int_zarfiat_felez, int_zarfiat_nafelez) != 1) {
    zarfiat_felez = zarfiat_felez / gcd(int_zarfiat_felez, int_zarfiat_nafelez);
    zarfiat_nafelez =
      zarfiat_nafelez / gcd(int_zarfiat_felez, int_zarfiat_nafelez);
  }

  if (hasNumber(namad_felez)) {
    if (zarfiat_nafelez != "") {
      namad_felez = "(" + namad_felez + ")";
    }
  }

  if (zarfiat_nafelez == 1) {
    zarfiat_nafelez = "";
  }

  if (zarfiat_felez == 1) {
    zarfiat_felez = "";
  }

  formula = namad_felez + zarfiat_nafelez + namad_nafelez + zarfiat_felez;

  return formula, nam;
}
function nafleNafle() {
  f_and_ns = {
    0: ["PF5", "فسفر پنتا فلوئورید"],
    1: ["CF4", "کربن تترا فلوئورید"],
    2: ["IF5", "یدو پنتا فلوئورید"],
    3: ["NBr3", "نیتروژن تری برمید"],
    4: ["N2O5", "دی نیتروژن پنتا اکسید"],
    5: ["N2O", "دی نیتروژن مونو اکسید"],
    6: ["NO2", "نیتروژن دی اکسید"],
    7: ["NO", "نیتروژن مونو اکسید"],
    8: ["IF3", "یدو تری فلوئورید"],
    9: ["PCl3", "فسفر تری کلرید"],
  };

  let chosen_question_num = randomNumber(0, 9);
  formula = f_and_ns[chosen_question_num][0];
  nam = f_and_ns[chosen_question_num][1];
  return formula, nam;
}
function hidroxide() {
  felezat = {
    0: ["Li", "لیتیم", [""], "Lithium"],
    1: ["Na", "سدیم", [""], "Sodium"],
    2: ["K", "پتاسیم", [""], "Potassium"],
    3: ["Rb", "روبیدیم", [""], "Rubidium"],
    4: ["Cs", "سزیم", [""], "Cesium"],

    5: ["Be", "بریلیم", ["2"], "Beryllium"],
    6: ["Mg", "منیزیم", ["2"], "Magnesium"],
    7: ["Ca", "کلسیم", ["2"], "Calcium"],
    8: ["Sr", "استرانسیم", ["2"], "Strontium"],
    9: ["Ba", "باریم", ["2"], "Barium"],

    10: ["B", "بور", ["3"], "Boron"],
    11: ["Al", "آلومینیم", ["3"], "Aluminum"],

    12: ["Sn", "قلع", ["2", "4"], "Tin"],
    13: ["Pb", "سرب", ["2", "4"], "Lead"],

    14: ["Ag", "نقره", [""], "Silver"],
    15: ["Hg", "جیوه", ["", "2"], "Mercury"],
    16: ["Cu", "مس", ["", "2"], "Copper"],
    17: ["Zn", "روی", ["2"], "Zinc"],
    18: ["Cd", "کادمیم", ["2"], "Cadmium"],
    19: ["Mn", "منگنز", ["2", "3", "4", "6", "7"], "Manganese"],
    20: ["Fe", "آهن", ["2", "3"], "Iron"],
    21: ["Ni", "نیکل", ["2", "3"], "Nickel"],
    22: ["Co", "کبالت", ["2", "3"], "Cobalt"],
    23: ["Cr", "کروم", ["2", "3", "6"], "Chromium"],
    24: ["NH4", "آمونیوم", [""], "Amunium"],
  };

  nafelezat = {
    0: ["OH", "هیدروکسید", [""]],
  };
  const chosen_felez = felezat[randomNumber(0, 24)];
  const chosen_nafelez = nafelezat[0];

  let namad_felez = chosen_felez[0];
  let namad_nafelez = chosen_nafelez[0];

  const esm_felez = chosen_felez[1];
  const esm_nafelez = chosen_nafelez[1];

  const tedad_zarfiat_felez = chosen_felez[2].length;

  const tedad_zarfiat_felez_minus_one = tedad_zarfiat_felez - 1;
  let zarfiat_felez =
    chosen_felez[2][randomNumber(0, tedad_zarfiat_felez_minus_one)];
  let zarfiat_nafelez = chosen_nafelez[2][0];

  let int_zarfiat_felez = 1;
  if (zarfiat_felez == "") {
    int_zarfiat_felez = 1;
  } else {
    int_zarfiat_felez = parseInt(zarfiat_felez);
  }

  let int_zarfiat_nafelez = 1;
  if (zarfiat_nafelez == "") {
    int_zarfiat_nafelez = 1;
  } else {
    int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
  }

  if (chosen_felez[2].length != 1) {
    nam =
      esm_felez +
      "(" +
      romanize(parseInt(int_zarfiat_felez)) +
      ")" +
      " " +
      esm_nafelez;
  } else {
    nam = esm_felez + " " + esm_nafelez;
  }

  if (zarfiat_felez == zarfiat_nafelez) {
    zarfiat_felez = "";
  }

  int_zarfiat_felez = 1;
  if (zarfiat_felez == "") {
    int_zarfiat_felez = 1;
  } else {
    int_zarfiat_felez = parseInt(zarfiat_felez);
  }

  int_zarfiat_nafelez = 1;
  if (zarfiat_nafelez == "") {
    int_zarfiat_nafelez = 1;
  } else {
    int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
  }

  if (zarfiat_felez != "") {
    namad_nafelez = "(" + namad_nafelez + ")";
  }

  if (zarfiat_nafelez == 1) {
    zarfiat_nafelez = "";
  }

  if (zarfiat_felez == 1) {
    zarfiat_felez = "";
  }
  formula = namad_felez + zarfiat_nafelez + namad_nafelez + zarfiat_felez;

  return formula, nam;
}
function asidBiOxygene() {
  f_and_ns = {
    0: ["H2S", "هیدرو سولفوریک اسید"],
    1: ["HCl", "هیدرو کلریک اسید"],
  };

  let chosen_question_num = randomNumber(0, 1);
  formula = f_and_ns[chosen_question_num][0];
  nam = f_and_ns[chosen_question_num][1];
  return formula, nam;
}
function asidOxygeneDar() {
  f_and_ns = {
    0: ["HNO2", "نیترو اسید"],
    1: ["HNO3", "نیتریک اسید"],
    2: ["H2SO3", "سولفورو اسید"],
    3: ["H2SO4", "سولفوریک اسید"],
    4: ["H3PO3", "فسفرو اسید"],
    5: ["H3PO4", "فسفریک اسید"],
    6: ["H2CO3", "کربنیک اسید"],

    7: ["HClO", "هیپو کلرو اسید"],
    8: ["HClO2", "کلرو اسید"],
    9: ["HClO3", "کلریک اسید"],
    10: ["HClO4", "پر کلریک اسید"],

    11: ["HBrO", "هیپو برمو اسید"],
    12: ["HBrO2", "برمو اسید"],
    13: ["HBrO3", "برمیک اسید"],
    14: ["HBrO4", "پر برمیک اسید"],

    15: ["HIO", "هیپو یدو اسید"],
    16: ["HIO2", "یدو اسید"],
    17: ["HIO3", "یدیک اسید"],
    18: ["HIO4", "پر یدیک اسید"],
  };

  let chosen_question_num = randomNumber(0, 18);
  formula = f_and_ns[chosen_question_num][0];
  nam = f_and_ns[chosen_question_num][1];
  return formula, nam;
}
function namak() {
  felezat = {
    0: ["Li", "لیتیم", [""], "Lithium"],
    1: ["Na", "سدیم", [""], "Sodium"],
    2: ["K", "پتاسیم", [""], "Potassium"],
    3: ["Rb", "روبیدیم", [""], "Rubidium"],
    4: ["Cs", "سزیم", [""], "Cesium"],

    5: ["Be", "بریلیم", ["2"], "Beryllium"],
    6: ["Mg", "منیزیم", ["2"], "Magnesium"],
    7: ["Ca", "کلسیم", ["2"], "Calcium"],
    8: ["Sr", "استرانسیم", ["2"], "Strontium"],
    9: ["Ba", "باریم", ["2"], "Barium"],

    10: ["B", "بور", ["3"], "Boron"],
    11: ["Al", "آلومینیم", ["3"], "Aluminum"],

    12: ["Sn", "قلع", ["2", "4"], "Tin"],
    13: ["Pb", "سرب", ["2", "4"], "Lead"],

    14: ["Ag", "نقره", [""], "Silver"],
    15: ["Hg", "جیوه", ["", "2"], "Mercury"],
    16: ["Cu", "مس", ["", "2"], "Copper"],
    17: ["Zn", "روی", ["2"], "Zinc"],
    18: ["Cd", "کادمیم", ["2"], "Cadmium"],
    19: ["Mn", "منگنز", ["2", "3", "4", "6", "7"], "Manganese"],
    20: ["Fe", "آهن", ["2", "3"], "Iron"],
    21: ["Ni", "نیکل", ["2", "3"], "Nickel"],
    22: ["Co", "کبالت", ["2", "3"], "Cobalt"],
    23: ["Cr", "کروم", ["2", "3", "6"], "Chromium"],
    24: ["NH4", "آمونیوم", [""], "Amunium"],
  };

  nafelezat = {
    0: ["NO2", "نیتریت", [""]],
    1: ["NO3", "نیترات", [""]],
    2: ["SO3", "سولفیت", ["2"]],
    3: ["SO4", "سولفات", ["2"]],
    4: ["PO4", "فسفات", ["3"]],
    5: ["CO3", "کربنات", ["2"]],
    6: ["MnO4", "منگنات", ["2"]],
    7: ["MnO4", "پرمنگنات", [""]],
    8: ["CrO4", "کرومات", ["2"]],
    9: ["Cr2O7", "دی کرومات", ["2"]],
    10: ["CN", "سیانید", [""]],
    11: ["O2", "پر اکسید", ["2"]],
    12: ["N3", "آزید", [""]],

    13: ["BrO", "هیپو برمیت", [""]],
    14: ["BrO2", "برمیت", [""]],
    15: ["BrO3", "برمات", [""]],
    16: ["BrO4", "پر برمات", [""]],

    17: ["IO", "هیپو یدیت", [""]],
    18: ["IO2", "یدیت", [""]],
    19: ["IO3", "یدات", [""]],
    20: ["IO4", "پر یدات", [""]],

    21: ["ClO", "هیپو کلریت", [""]],
    22: ["ClO2", "کلریت", [""]],
    23: ["ClO3", "کلرات", [""]],
    24: ["ClO4", "پر کلرات", [""]],
  };
  const chosen_felez = felezat[randomNumber(0, 24)];
  const chosen_nafelez = nafelezat[randomNumber(0, 24)];

  let namad_felez = chosen_felez[0];
  let namad_nafelez = chosen_nafelez[0];

  const esm_felez = chosen_felez[1];
  const esm_nafelez = chosen_nafelez[1];

  const tedad_zarfiat_felez = chosen_felez[2].length;

  const tedad_zarfiat_felez_minus_one = tedad_zarfiat_felez - 1;
  let zarfiat_felez =
    chosen_felez[2][randomNumber(0, tedad_zarfiat_felez_minus_one)];
  let zarfiat_nafelez = chosen_nafelez[2][0];

  let int_zarfiat_felez = 1;
  if (zarfiat_felez == "") {
    int_zarfiat_felez = 1;
  } else {
    int_zarfiat_felez = parseInt(zarfiat_felez);
  }

  let int_zarfiat_nafelez = 1;
  if (zarfiat_nafelez == "") {
    int_zarfiat_nafelez = 1;
  } else {
    int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
  }

  if (chosen_felez[2].length != 1) {
    nam =
      esm_felez +
      "(" +
      romanize(parseInt(int_zarfiat_felez)) +
      ")" +
      " " +
      esm_nafelez;
  } else {
    nam = esm_felez + " " + esm_nafelez;
  }

  if (zarfiat_felez == zarfiat_nafelez) {
    zarfiat_felez = "";
    zarfiat_nafelez = "";
  }

  int_zarfiat_felez = 1;
  if (zarfiat_felez == "") {
    int_zarfiat_felez = 1;
  } else {
    int_zarfiat_felez = parseInt(zarfiat_felez);
  }

  int_zarfiat_nafelez = 1;
  if (zarfiat_nafelez == "") {
    int_zarfiat_nafelez = 1;
  } else {
    int_zarfiat_nafelez = parseInt(zarfiat_nafelez);
  }

  if (gcd(int_zarfiat_felez, int_zarfiat_nafelez) != 1) {
    zarfiat_felez = zarfiat_felez / gcd(int_zarfiat_felez, int_zarfiat_nafelez);
    zarfiat_nafelez =
      zarfiat_nafelez / gcd(int_zarfiat_felez, int_zarfiat_nafelez);
  }

  if (hasNumber(namad_felez)) {
    if (zarfiat_nafelez != "") {
      namad_felez = "(" + namad_felez + ")";
    }
  }

  cond_zarfyek =
    namad_nafelez == "CN" ||
    namad_nafelez == "BrO" ||
    namad_nafelez == "IO" ||
    namad_nafelez == "ClO";
  if (hasNumber(namad_nafelez) || cond_zarfyek) {
    if (zarfiat_felez != "") {
      namad_nafelez = "(" + namad_nafelez + ")";
    }
  }

  if (zarfiat_nafelez == 1) {
    zarfiat_nafelez = "";
  }

  if (zarfiat_felez == 1) {
    zarfiat_felez = "";
  }
  formula = namad_felez + zarfiat_nafelez + namad_nafelez + zarfiat_felez;

  return formula, nam;
}
function aaAsli() {
  anasor_asli = {
    0: ["H", 1],
    1: ["He", 2],
    2: ["Li", 3],
    3: ["Be", 4],
    4: ["B", 5],
    5: ["C", 6],
    6: ["N", 7],
    7: ["O", 8],
    8: ["F", 9],
    9: ["Ne", 10],
    10: ["Na", 11],
    11: ["Mg", 12],
    12: ["Al", 13],
    13: ["Si", 14],
    14: ["P", 15],
    15: ["S", 16],
    16: ["Cl", 17],
    17: ["Ar", 18],
    18: ["K", 19],
    19: ["Ca", 20],

    20: ["Ga", 31],
    21: ["Ge", 32],
    22: ["As", 33],
    23: ["Se", 34],
    24: ["Br", 35],
    25: ["Kr", 36],
    26: ["Rb", 37],
    27: ["Sr", 38],

    28: ["In", 49],
    29: ["Sn", 50],
    30: ["Sb", 51],
    31: ["Te", 52],
    32: ["I", 53],
    33: ["Xe", 54],
    34: ["Cs", 55],
    35: ["Ba", 56],

    36: ["Tl", 81],
    37: ["Pb", 82],
    38: ["Bi", 83],
    39: ["Po", 84],
    40: ["At", 85],
    41: ["Rn", 86],
    42: ["Fr", 87],
    43: ["Ra", 88],

    44: ["Nh", 113],
    45: ["Fl", 114],
    46: ["Mc", 115],
    47: ["Lv", 116],
    48: ["Ts", 117],
    49: ["Og", 118],
  };
  let chosen_question_num = randomNumber(0, 49);
  formula = anasor_asli[chosen_question_num][0];
  nam = anasor_asli[chosen_question_num][1];
  return formula, nam;
}
function aaVasete() {
  anasor_vasete = {
    0: ["Sc", 21],
    1: ["Ti", 22],
    2: ["V", 23],
    3: ["Cr", 24],
    4: ["Mn", 25],
    5: ["Fe", 26],
    6: ["Co", 27],
    7: ["Ni", 28],
    8: ["Cu", 29],
    9: ["Zn", 30],

    10: ["Y", 39],
    11: ["Zr", 40],
    12: ["Nb", 41],
    13: ["Mo", 42],
    14: ["Tc", 43],
    15: ["Ru", 44],
    16: ["Rh", 45],
    17: ["Pd", 46],
    18: ["Ag", 47],
    19: ["Cd", 48],

    20: ["Lu", 71],
    21: ["Hf", 72],
    22: ["Ta", 73],
    23: ["W", 74],
    24: ["Re", 75],
    25: ["Os", 76],
    26: ["Ir", 77],
    27: ["Pt", 78],
    28: ["Au", 79],
    29: ["Hg", 80],

    30: ["Lr", 103],
    31: ["Rf", 104],
    32: ["Db", 105],
    33: ["Sg", 106],
    34: ["Bh", 107],
    35: ["Hs", 108],
    36: ["Mt", 109],
    37: ["Ds", 110],
    38: ["Rg", 111],
    39: ["Cn", 112],

    40: ["La", 57],
    41: ["Ce", 58],
    42: ["Pr", 59],
    43: ["Nd", 60],
    44: ["Pm", 61],
    45: ["Sm", 62],
    46: ["Eu", 63],
    47: ["Gd", 64],
    48: ["Tb", 65],
    49: ["Dy", 66],
    50: ["Ho", 67],
    51: ["Er", 68],
    52: ["Tm", 69],
    53: ["Yb", 70],

    54: ["Ac", 89],
    55: ["Th", 90],
    56: ["Pa", 91],
    57: ["U", 92],
    58: ["Np", 93],
    59: ["Pu", 94],
    60: ["Am", 95],
    61: ["Cm", 96],
    62: ["Bk", 97],
    63: ["Cf", 98],
    64: ["Es", 99],
    65: ["Fm", 100],
    66: ["Md", 101],
    67: ["No", 102],
  };
  let chosen_question_num = randomNumber(0, 49);
  formula = anasor_vasete[chosen_question_num][0];
  nam = anasor_vasete[chosen_question_num][1];
  return formula, nam;
}

// needed  secondary funs
function askQuestion() {
  current_topic = chosen_topics[randomNumber(0, chosen_topics.length - 1)];

  // run funs
  if (current_topic == "FwDoFlenafle") {
    fleNafle();
  } else if (current_topic == "FwDoNalenafle") {
    nafleNafle();
  } else if (current_topic == "FwSeHidroxide") {
    hidroxide();
  } else if (current_topic == "FwSeAsidOxygeneDar") {
    asidOxygeneDar();
  } else if (current_topic == "FwSeAsidBiOxygene") {
    asidBiOxygene();
  } else if (current_topic == "FwSeNamak") {
    namak();
  } else if (current_topic == "AaAsli") {
    aaAsli();
  } else if (current_topic == "AaVasete") {
    aaVasete();
  }

  // prep q OR a
  let run = true;
  while (run) {
    if (chosen_type_fw == "Fbn") {
      current_question = formula;
      current_answer = nam;
      run = false;
    } else if (chosen_type_fw == "Nbf") {
      current_question = nam;
      current_answer = formula;
      run = false;
    } else if (chosen_type_fw == "Both") {
      if (fw_ask_q) {
        fw_ask_q = 0;
        current_question = formula;
        current_answer = nam;
      } else {
        fw_ask_q = 1;
        current_question = nam;
        current_answer = formula;
      }
      run = false;
    } else {
      chosen_type_fw = "Both";
    }
  }

  // box javab
  let cond_topic_is_fw =
    current_topic == "FwDoFlenafle" ||
    current_topic == "FwDoNalenafle" ||
    current_topic == "FwSeHidroxide" ||
    current_topic == "FwSeAsidOxygeneDar" ||
    current_topic == "FwSeAsidBiOxygene" ||
    current_topic == "FwSeNamak";
  let cond_topic_is_aa =
    current_topic == "AaAsli" || current_topic == "AaVasete";

  if (cond_topic_is_fw) {
    if (current_question == formula) {
      txt = "نام ترکیب " + current_question + " را بنویسید.";
    } else if (current_question == nam) {
      txt = "فرمول ترکیب " + current_question + " را بنویسید.";
    }
  } else if (cond_topic_is_aa) {
    if (current_question == formula) {
      txt = "عدد اتمی عنصر " + current_question + " را بنویسید.";
    } else if (current_question == nam) {
      txt = "عدد اتمی " + current_question + " متعلق به چه عنصری است؟";
    }
  }

  if (cond_topic_is_fw) {
    if (current_question == formula) {
      textt = "نام ترکیب داده شده را بنویسید...";
    } else if (current_question == nam) {
      textt = "فرمول ترکیب داده شده را بنویسید...";
    }
  } else if (cond_topic_is_aa) {
    if (current_question == formula) {
      textt = "عدد اتمی عنصر داده شده چیست؟";
    } else if (current_question == nam) {
      textt = "عدد اتمی داده شده متعلق به چه عنصری است؟";
    }
  }
}
function nextQuestion() {
  document.querySelector(".js-your-answer-input").value = "";
  document.querySelector(".answer-check-result").innerHTML = "";
  document.querySelector(".next-button-txt").innerHTML = "Next question";
  numberof_asked_questions++;

  if (chosen_topics.length == 0) {
    // document.getElementById('next-quest-button').data_bs_toggle = "modal";
    // document.getElementById('next-quest-button'). data_bs_target = "#staticBackdrop";
  }
  //gggggggggggggggggghhhhhhhhhhhhhhhhhhhhh

  current_topic = chosen_topics[randomNumber(0, chosen_topics.length - 1)];

  // run funs
  if (current_topic == "FwDoFlenafle") {
    fleNafle();
  } else if (current_topic == "FwDoNalenafle") {
    nafleNafle();
  } else if (current_topic == "FwSeHidroxide") {
    hidroxide();
  } else if (current_topic == "FwSeAsidOxygeneDar") {
    asidOxygeneDar();
  } else if (current_topic == "FwSeAsidBiOxygene") {
    asidBiOxygene();
  } else if (current_topic == "FwSeNamak") {
    namak();
  } else if (current_topic == "AaAsli") {
    aaAsli();
  } else if (current_topic == "AaVasete") {
    aaVasete();
  }

  // prep q OR a
  let run = true;
  while (run) {
    if (chosen_type_fw == "Fbn") {
      current_question = formula;
      current_answer = nam;
      run = false;
    } else if (chosen_type_fw == "Nbf") {
      current_question = nam;
      current_answer = formula;
      run = false;
    } else if (chosen_type_fw == "Both") {
      if (fw_ask_q) {
        fw_ask_q = 0;
        current_question = formula;
        current_answer = nam;
      } else {
        fw_ask_q = 1;
        current_question = nam;
        current_answer = formula;
      }
      run = false;
    } else {
      document.querySelector(".option-hardo").checked = true;
      chosen_type_fw = "Both";
    }
  }

  // box javab
  let cond_topic_is_fw =
    current_topic == "FwDoFlenafle" ||
    current_topic == "FwDoNalenafle" ||
    current_topic == "FwSeHidroxide" ||
    current_topic == "FwSeAsidOxygeneDar" ||
    current_topic == "FwSeAsidBiOxygene" ||
    current_topic == "FwSeNamak";
  let cond_topic_is_aa =
    current_topic == "AaAsli" || current_topic == "AaVasete";

  if (cond_topic_is_fw) {
    document.querySelector(".soal").style.fontFamily =
      "Sorts Mill Goudy, Calibri, serif";
    document.querySelector(".soal").style.fontWeight = 400;
    document.querySelector(".soal").style.fontStyle = "normal";
    if (current_question == formula) {
      txt = "نام ترکیب داده شده را بنویسید...";
    } else if (current_question == nam) {
      txt = "فرمول ترکیب داده شده را بنویسید...";
    }
  } else if (cond_topic_is_aa) {
    document.querySelector(".soal").style.fontFamily = "Calibri, serif";
    document.querySelector(".soal").style.fontWeight = 400;
    document.querySelector(".soal").style.fontStyle = "normal";
    if (current_question == formula) {
      txt = "عدد اتمی عنصر داده شده چیست؟";
    } else if (current_question == nam) {
      txt = "عدد اتمی داده شده متعلق به چه عنصری است؟";
    }
  }

  // } else {
  //   if (chosen_type_aa == 'Abn') {
  //     txt = "عدد اتمی داده شده مربوط به چه عنصری است؟";
  //   } else if (chosen_type_aa = 'Nba') {
  //     txt = "عدد اتمی عنصر داده شد چیست؟";
  //   }
  // }

  document.querySelector(".javab-box").innerHTML = txt;

  document.querySelector(".soal").innerHTML = current_question;
}
function checkTheAnswerClicked() {
  const your_answer = document.querySelector(".js-your-answer-input").value;
  answerCheck(your_answer);
}
function answerCheck(your_answer) {
  if (your_answer == current_answer) {
    document.querySelector(".answer-check-result").innerHTML = "درسته! آفرین!";
  } else {
    document.querySelector(".answer-check-result").innerHTML =
      "اشتباهه! جواب درست: " + current_answer;
  }
}
function quizQuestionsEmerge() {
  let n_hours = Math.floor(
    document.querySelector(".minutes-inp-quiz").value / 60
  );
  let n_minutes = document.querySelector(".minutes-inp-quiz").value % 60;
  let n_seconds = document.querySelector(".seconds-inp-quiz").value - 0;
  let ques_nums = document.querySelector(".quest-nums").value;
  countDown(n_hours, n_minutes, n_seconds, 0, ques_nums);
}
function countDown(n_hours, n_minutes, n_seconds, i, ques_nums) {
  var now = new Date().getTime();
  var that_now = now;
  let the_questions = [];
  let the_answers = [];
  let quiz_result = [];
  let their_answers = [];

  if (i == 0) {
    i++;
    amooi++;
    document.getElementById("navbar").innerHTML = "";
    document.getElementById("study-body").innerHTML = "";
    for (let j = 0; j < ques_nums; j++) {
      askQuestion();
      the_questions.push(current_question);
      the_answers.push(current_answer);

      if (j == 0) {
        let top_timerbar = document.createElement("div");
        top_timerbar.className = "align-center";
        top_timerbar.style.display = "block";
        let timer_box = document.createElement("label");
        timer_box.appendChild(document.createTextNode(""));
        timer_box.id = "timer-box";
        top_timerbar.style.height = "3%";
        timer_box.style =
          "background-color:rgb(170, 255, 200); width: 10%; position: fixed; display: block; margin-left: 45%";
        timer_box.className = "text-center";
        top_timerbar.appendChild(timer_box);
        document.getElementById("study-body").appendChild(top_timerbar);
      }

      let whole_q_box = document.createElement("div");
      whole_q_box.className = "row border border-opacity-10 rounded";
      whole_q_box.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      if (j == 0) {
        whole_q_box.style.marginTop = "2%";
      }

      const not_whole_q_box = document.createElement("div");
      not_whole_q_box.className = "col-10";
      not_whole_q_box.id = String(j + 100);

      const no_not_whole_q_box = document.createElement("div");
      no_not_whole_q_box.className = "col-2";

      const quest_no = document.createElement("label");
      quest_no.className = "mt-3";
      quest_no.appendChild(document.createTextNode("سؤال شمارۀ " + (j + 1)));

      const q_label = document.createElement("label");
      q_label.className = "container";
      q_label.style = "direction: rtl;";
      q_label.appendChild(document.createTextNode(txt));
      q_label.style.fontFamily = "Sorts Mill Goudy, Calibri, serif";
      q_label.style.fontWeight = 400;
      q_label.style.fontStyle = "normal";
      // here

      const q_input = document.createElement("input");
      q_input.placeholder = textt;
      q_input.className = "container";
      q_input.style = "direction: rtl;";
      q_input.autocomplete = "off";
      q_input.id = String(j + 1);

      not_whole_q_box.appendChild(q_label);
      not_whole_q_box.appendChild(q_input);
      no_not_whole_q_box.appendChild(quest_no);
      whole_q_box.appendChild(not_whole_q_box);
      whole_q_box.appendChild(no_not_whole_q_box);
      document.getElementById("study-body").appendChild(whole_q_box);
    }
  }

  document.getElementById("ennnd").style.opacity = 1;

  var x = setInterval(function () {
    var now = new Date().getTime();
    var then =
      that_now +
      n_hours * 1000 * 60 * 60 +
      n_minutes * 1000 * 60 +
      n_seconds * 1000;
    var distance = then - now;
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let remg = hours + minutes + seconds;
    if (time_remained) {
      document.getElementById("timer-box").innerHTML =
        hours + " : " + minutes + " : " + seconds;
    } else {
      remg = -1;
    }
    if (remg < 1 || !time_remained) {
      endPressed();
      clearInterval(x);
    }
  }, 1000);
  function endPressed() {
    for (let j = 0; j < ques_nums; j++) {
      let their_answer = "";
      let j_plus_one = String(j + 1);
      their_answer = document.getElementById(j_plus_one).value;
      their_answers.push(their_answer);
      if (their_answer == the_answers[j]) {
        quiz_result.push([
          the_questions[j],
          the_answers[j],
          their_answer,
          true,
        ]);
      } else {
        quiz_result.push([
          the_questions[j],
          the_answers[j],
          their_answer,
          false,
        ]);
      }
    }
    // console.log(quiz_result);
    showResults(quiz_result);
  }
}
function showResults(quiz_result) {
  document.getElementById("timer-box").style.opacity = 0;
  document.getElementById("ennnd").style.opacity = 0;
  for (let i = 0; i < quiz_result.length; i++) {
    oldchild = document.getElementById(String(i + 1));
    // // oldchild.innerHTML = "";
    // console.log(oldchild.id);
    newchild = document.createElement("label");
    // newchild.style.direction = "rtl";
    if (quiz_result[i][3] == true) {
      result_txt = quiz_result[i][2] + "✔";
    } else {
      result_txt =
        quiz_result[i][2] +
        "❌, " +
        "the correct answer is: " +
        quiz_result[i][1];
    }
    // console.log(result_txt);
    // newchild.createTextNode = result_txt;
    newchild.appendChild(document.createTextNode(result_txt));
    // document.getElementById(String(i + 100)).appendChild(newchild);
    // console.log(
    // newchild.innerHTML,
    // newchild.id,
    // newchild.value,
    // newchild.style
    // );
    document.getElementById(String(i + 100)).replaceChild(newchild, oldchild);
  }
  progress = document.createElement("div");
  // style later
}
