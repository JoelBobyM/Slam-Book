import {PageFlip} from 'page-flip';

const pageFlip = new PageFlip(
  document.getElementById("example"),
    {
      // start page index
      startPage: 0,
      size: SizeType.FIXED,
      // width & height *(REQUIRED)
      width: 0,
      height: 0,
      // min/max width & height
      minWidth: 0,
      maxWidth: 0,
      minHeight: 0,
      maxHeight: 0,
      // draw book shadows
      drawShadow: true,
      // animation speed
      flippingTime: 1000,
      // allows to switch to portrait mode
      usePortrait: true,
      // z-index property
      startZIndex: 0,
      // auto resizes the parent container to fit the book
      autoSize: true,
      // max opacity of shadow
      maxShadowOpacity: 1,
      // shows book cover
      showCover: false,
      // supports mobile scroll?
      mobileScrollSupport: true
    }
);


pageFlip.loadFromHTML(document.querySelectorAll(".page"));
// // Browser
// const pageFlip = new St.PageFlip(
//   document.getElementById("example"),
//     {
//       // options here
//     }
// );

// triggered by page turning
pageFlip.on("flip", (e) => {
  document.querySelector(".page-current").innerText = e.data + 1;
});
// triggered when the state of the book changes
pageFlip.on("changeState", (e) => {
  // ("user_fold", "fold_corner", "flipping", "read")
});
// triggered when page orientation changes
pageFlip.on("changeOrientation", (e) => {
  // ("portrait", "landscape")
});
// triggered when the book is init and the start page is loaded
pageFlip.on("init", (e) => {
  ({page: number, mode: 'portrait'})
});
// triggered when the book pages are updated
pageFlip.on("update", (e) => {
  // ({page: number, mode: 'portrait', 'landscape'}
})