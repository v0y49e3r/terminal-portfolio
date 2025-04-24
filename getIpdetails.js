// su dung fetch api cho viec lay data
// https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/

let IpDetails = [];
let url = "https://ipinfo.io/json";

// kho vcl
// async
// nghia la khi lay api thi can 1 -2 second trong thoi gian nay
//  app khong dung lai de lay du lieu cho nen la ta can dung voi cai async/await

// don gian thi ta se dung async de danh dau day la 1 async function de a dung await
// nghia la dung doi cho den khi lay duoc data

const fetchData = async () => {
  try {
    const response = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        IpDetails.push(data);
      });
  } catch (error) {
    console.log();
  }
};

// const getData = async () => {
//   await fetchData();
//   console.log(IpDetails);
// };
// getData();

export { fetchData, IpDetails };
