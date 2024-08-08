export const CONSTANTS = {
    backEndUrl: "http://localhost:8082/api/items",
    emptyItemObj: {
      name: "",
      category: "",
      price: 0,
      rating: 0,
    },
  };
  
  export const Util = {
    handleEditInputChange: (callBackFun, nameValueObj) => {
      const { name, value } = nameValueObj;
      callBackFun((prevObj) => ({
        ...prevObj,
        [name]: value,
      }));
    },
  };
  