document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");
  
    function showPage(id) {
      pages.forEach(page => {
        page.hidden = page.id !== id;
      });
    }
  
    window.addEventListener("hashchange", () => {
      const pageId = location.hash.replace("#", "") || "home";
      showPage(pageId);
    });
  
    // Initial page load
    const initialPage = location.hash.replace("#", "") || "home";
    showPage(initialPage);
  });
  