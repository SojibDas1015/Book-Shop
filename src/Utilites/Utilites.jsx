const getItem = () => {
    const getItemFormLocal = localStorage.getItem('wishlist');
    if(getItemFormLocal){
        return JSON.parse(getItemFormLocal);
    }
    return []
}

const setItem = (id) => {
    const getItemFormLocal = getItem();
    getItemFormLocal.push(id)
    localStorage.setItem('wishlist', JSON.stringify(getItemFormLocal));
}
const getItemRead = () => {
    const getItemFormLocal = localStorage.getItem('readlist');
    if(getItemFormLocal){
        return JSON.parse(getItemFormLocal);
    }
    return []
}

const setItemRead = (id) => {
    const getItemFormLocal = getItemRead();
    getItemFormLocal.push(id)
    localStorage.setItem('readlist', JSON.stringify(getItemFormLocal));
}

export {getItem, setItem, getItemRead, setItemRead}