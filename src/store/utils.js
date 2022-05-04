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

const getRandomArray = () => {
  const randomArray = [];

  while (randomArray.length < 100) {
    randomArray.push(randomArray.length + 1);
  }

  randomArray.sort(() => Math.random() - 0.5);

  return randomArray.slice(0, 3);
};

const mapResponses = (responses) => responses.map((res) => res.data);

export { getCurrentPage, saveLocal, getRandomArray, mapResponses };
