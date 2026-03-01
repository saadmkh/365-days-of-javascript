let theme = "light";
let systemPreference = "dark";
let isApplied = false;

function applyTheme() {
  if (theme === "auto") {
    console.log("Theme applied:", systemPreference);
  } else {
    console.log("Theme applied:", theme);
  }
  isApplied = true;
}

function setLight() {
  theme = "light";
  isApplied = false;
}

function setDark() {
  theme = "dark";
  isApplied = false;
}

function setAuto() {
  theme = "auto";
  isApplied = false;
}

function changeSystemPreference(mode) {
  systemPreference = mode;
  if (theme === "auto") {
    applyTheme();
  }
}

function status() {
  console.log({
    theme: theme,
    systemPreference: systemPreference,
    applied: isApplied
  });
}

status();
applyTheme();
setDark();
applyTheme();
setAuto();
changeSystemPreference("light");
status();
