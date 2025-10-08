// content.js
function removeShortsElements() {
  // Remove Shorts links in side/guide menus
  document.querySelectorAll('a[title="Shorts"], tp-yt-paper-item .title').forEach(el => {
    if (el.textContent.trim() === "Shorts") {
      el.closest('a, tp-yt-paper-item')?.remove();
    }
  });

  // Remove Shorts shelves (main feed)
  document.querySelectorAll('ytd-rich-section-renderer, ytd-rich-shelf-renderer').forEach(section => {
    if (section.innerText.includes("Shorts")) {
      section.remove();
    }
  });

  // Remove Shorts thumbnails in video grid
  document.querySelectorAll('a[href*="/shorts/"]').forEach(link => {
    link.closest('ytd-rich-item-renderer, ytd-grid-video-renderer, ytd-video-renderer, ytm-shorts-lockup-view-model')?.remove();
  });

  // If user tries to open a Shorts video, redirect to homepage
  if (location.pathname.startsWith("/shorts/")) {
    console.log("Redirected a Shorts link!");
    location.replace("https://www.youtube.com/");
  }
}

// Observe DOM changes — YouTube dynamically loads content
const observer = new MutationObserver(removeShortsElements);
observer.observe(document.body, { childList: true, subtree: true });

// Run once at start
removeShortsElements();
