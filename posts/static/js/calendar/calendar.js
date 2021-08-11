let date = new Date();
// let contents = JSON.parse("{{ contents_js | escapejs }}")

const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  document.querySelector(".cal-year").textContent = `${viewYear}`;
  document.querySelector(".cal-month").textContent = `${viewMonth + 1}`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  dates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
    const dateClassSelector = `.on${viewYear}-${viewMonth + 1}-${date}`;
    const entryImg = document.querySelectorAll(dateClassSelector);
    const recent = [...entryImg][0];

    const dateElement = document.createElement("div");
    dateElement.classList.add("cal-date");
    dateElement.classList.add(condition);
    dateElement.textContent = date;
    if (recent) {
      dateElement.style.background = `url(${
        recent.querySelector(".img-src").textContent
      }) no-repeat center/60%`;
      // Link to details event-listener
      const postNum = recent.querySelector(".id").textContent;
      const link = document.createElement("a");
      link.href = `/posts/detail/${postNum}`;
      link.classList.add("post-link");
      dateElement.appendChild(link);
    }
    dates[i] = dateElement.outerHTML;
  });

  document.querySelector(".cal-dates").innerHTML = dates.join("");
  //div가 담긴 dates 배열을 통째로 cal-dates div에 옮겨심기

  const today = new Date();

  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll(".this")) {
      if (+date.innerText === today.getDate()) {
        date.classList.add("today");
        date.style.background += " rgba(235, 178, 155, 0.8)";
        break;
      }
    }
  }
}; //renderCalendar

// console.log(contents);

renderCalendar();

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

const goToday = () => {
  date = new Date();
  renderCalendar();
};
