let progress = 0;
let downloading = false;

function startDownload() {
  if (downloading) {
    console.log("Download already in progress");
    return;
  }

  downloading = true;
  console.log("Download started");

  let timer = setInterval(() => {
    progress += 10;
    console.log("Progress:", progress + "%");

    if (progress >= 100) {
      clearInterval(timer);
      downloading = false;
      console.log("Download complete");
    }
  }, 500);
}

function resetDownload() {
  if (!downloading) {
    progress = 0;
    console.log("Download reset");
  } else {
    console.log("Cannot reset while downloading");
  }
}

startDownload();
