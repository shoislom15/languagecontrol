let langList = [
  {
    script: "en",
    name: "English",
  },
  {
    script: "ru",
    name: "Русский",
  },
];

const langSelector = document.querySelector("#lang");

langList.forEach((lang) => {
  const opt = document.createElement("option");
  opt.textContent = lang.name;
  opt.value = lang.script;
  langSelector.append(opt);
});

langSelector.addEventListener("change", () => {
  setURLLang();
});

const setURLLang = () => {
  let lang = langSelector.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
  localStorage.setItem("language", lang);
};

const getURLLang = () => {
  let hash = window.location.hash.slice(1);

  if (!langList.reduce((t, e) => (e.script == hash ? true : t), false)) {
    if (!localStorage.getItem("language")) {
      location.href = window.location.pathname + "#" + "en";
      location.reload();
    } else {
      hash = localStorage.getItem("language");
    }
  }
  langSelector.value = hash;
  for (let key in langs) {
    document.querySelector(".lng-" + key).textContent = langs[key][hash];
  }
  localStorage.setItem("language", hash);
};

getURLLang();
