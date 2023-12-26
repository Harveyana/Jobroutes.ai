
export const useConverters = () => {

    const objectToArray = (obj:{}) => {
        return Object.entries(obj).map(([key, value]) => ({ key, value }));
      };
    
    return {
      objectToArray
    }

}