(() => {
  const sigils = document.querySelectorAll(".sigilContainer"),
        lBox = document.querySelector(".lightbox"),
        houseVideo = document.querySelector("video"),
        lbClose = lBox.querySelector(".close-button"),
        houseImages = document.querySelector("#houseImages"),
        houseName = document.querySelector(".house-name"),
        houseInfo = document.querySelector(".house-info");


// store the house data in an array here
const houseData= [ // housedata[0][1]
["Stark" , `STARK
House Stark of Winterfell is a Great House of Westeros,
ruling over the vast region known as the North from their seat in Winterfell.
 It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros,
the leaders of House Stark ruled over the region as the Kings in the North.` ],
// 0
["Baratheon", `some stuff about Baratheon`],
// 1
[ "Lannister",   ] ,// 2
["Tully",] ,
["Greyjoy", ],
["Arryn", ]
]

  function popLightBox() {
    // find the right house video using the CSS class attached to the sigil that was clicked
    let targetVideo = this.className.split(" ")[1];

    // get the house name, capitalize the first character, and then rebuild the whole word with a cap.
    let targetVidCap = targetVideo.charAt(0).toUpperCase() + targetVideo.slice(1);

    // load the correct house video
    houseVideo.src = `video/House-${targetVidCap}.mp4`;
    houseVideo.load();

    // play the house video
    houseVideo.play();
    // add the show-lightbox class to the lBox element
    lBox.classList.add('show-lightbox');
  }

  function closeLightBox() {
    // stop and rewind the video element
    houseVideo.currentTime = 0;
    houseVideo.pause();
    // remove the show-lightbox class from the lBox element
    lBox.classList.remove('show-lightbox');
  }

  function animateBanners() {
    // move the banners across the screen
    const offSet = 600;

    let multiplier = this.dataset.offset,
        finalOffset = offSet * multiplier;
        // this will be a product of the mulitipier * the offset (600 * something)
    houseImages.style.right = finalOffset + "px";

    // call the showHouseData function and pass the offset to interval
  showHouseData(multiplier);
}

function showHouseData(targetIndex) {
  

  houseName.textContent = `House ${houseData[targetIndex] [0]} `;
  houseInfo.textContent = houseData[targetIndex][1];
}

  sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
  sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));


  lbClose.addEventListener("click", closeLightBox);
  houseVideo.addEventListener("ended", closeLightBox);
})();
