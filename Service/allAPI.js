import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"

//1.add
export const addDataAPI = async(reqbody) => {
    return await commonAPI("POST", `${BASEURL}/all-menu`, reqbody)
}


//2.getData

export const getDataAPI = async() => {
    return await commonAPI("GET", `${BASEURL}/all-menu`, (""))
}

//3.editData
export const getSingleDataAPI = async(id) => {
        return await commonAPI("GET", `${BASEURL}/all-menu/${id}`, (""))
    }
    //3.update menu
export const updateDataAPI = async(id, reqbody) => {
        return await commonAPI("PUT", `${BASEURL}/all-menu/${id}`, reqbody)
    }
    //5.deletedata

export const deleteDataAPI = async(id) => {
    return await commonAPI("DELETE", `${BASEURL}/all-menu/${id}`, (""))
}