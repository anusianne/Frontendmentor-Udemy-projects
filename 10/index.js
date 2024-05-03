const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMedia() {
  try {
    const media = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = media;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (e) {
    console.log("whoops, error here:", e);
  }
}
button.addEventListener("click", async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

selectMedia();
