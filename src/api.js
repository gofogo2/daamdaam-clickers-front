import axios from "axios";

export const instance = axios.create({
  baseURL: "http://192.168.0.38:4000",
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
