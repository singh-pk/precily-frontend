const transformData = responseData =>
  responseData.reduce((accumulator, response) => {
    accumulator[response._id] = response.imageUrl;
    return accumulator;
  }, {});

export default transformData;
