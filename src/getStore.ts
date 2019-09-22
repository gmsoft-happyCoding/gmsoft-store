/**
 * @Author GM20171202 
 * @Date 2019-09-22 18:56:14 
 */
export type StoreTypes = "indexedDB"|"localStorage"|"sessionStorage"


export const getStore = (key:string,storeType?:StoreTypes){
    if(!storeType && storeType === 'localStorage'){
        return getLocalStorage()
    }
}
