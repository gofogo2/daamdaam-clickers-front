import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://52.79.180.184:4000",
  baseURL: "http://3.90.51.34:5000",
});

export const GetAllList = async() => {
  return await instance
    .get("/gate")
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const GetDayList = async() => {
  return await instance
    .get("/gate/day")
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};


export const GetAdmin = async() => {
  return await instance
    .get("/gate/admin")
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

export  const AddCount = async(count) => {
  console.log(count);
  return await instance.post("/gate/", { count }).then((data) => {
    console.log(data);
    return data;
  }).catch((error)=>{
    console.log(error);
    return error.response;
  });
};

export  const AddTotal = async(count) => {
  console.log(count);
  return instance.post("/gate/total", { count }).then((data) => {
    console.log(data);
    return data;
  }).catch((error)=>{
    console.log(error);
    return error.response;
  });
};
