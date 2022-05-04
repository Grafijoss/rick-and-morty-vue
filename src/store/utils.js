const getCurrentPage = ({ paginatorOption, info }) => {
  let currentPage = 1;

  if (info.prev && paginatorOption) {
    currentPage = parseInt(info.prev.split("page=")[1], 10) + 1;
  }

  return currentPage;
};

const saveLocal = ({ state, infoWithCurrentPage }) => {
  localStorage.setItem(
    "state",
    JSON.stringify({
      paginationInfo: infoWithCurrentPage,
      filter: {
        type: state.filter.type,
        value: state.filter.value
      },
      matchName: state.matchName
    })
  );
};

export { getCurrentPage, saveLocal };
