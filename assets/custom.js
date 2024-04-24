document.addEventListener("DOMContentLoaded", function () {
  // $(document).ready(function () {
  //   $(".list__link").on("click", function (e) {
  //     e.preventDefault();
  //     let $clickedLink = $(this);
  //     let $parentItem = $clickedLink.parent();
  //     let index = $parentItem.index();

  //     let $tabHeadList = $parentItem.parent().children();
  //     let $tabBodyList = $parentItem
  //       .closest(".section-collection-tabs__tabs")
  //       .find(".section-collection-tabs__tab-body .list__item");

  //     $tabHeadList.removeClass("active").eq(index).addClass("active");
  //     $tabBodyList.removeClass("active").eq(index).addClass("active");
  //   });
  // });

  $(document).ready(function () {
    let toggleTubs = (e) => {
      e.preventDefault();
      let parentItem = $(e.currentTarget).parent();
      let elementActivatePosition = parentItem.index();

      let tabHeadList = parentItem.parent().children();
      let tabBodyList = parentItem
        .parent()
        .parent()
        .next()
        .children()
        .children();
      let activateTab = (elements, activeIndex) => {
        elements = elements.toArray();
        for (let item of elements) {
          $(item).removeClass("active");
          let elementPosition = $(item).index();
          if (activeIndex == elementPosition) {
            $(item).addClass("active");
          }
        }
      };
      activateTab(tabHeadList, elementActivatePosition);
      activateTab(tabBodyList, elementActivatePosition);
    };
    $(document).on("click", ".list__link", (e) => toggleTubs(e));
  });
});