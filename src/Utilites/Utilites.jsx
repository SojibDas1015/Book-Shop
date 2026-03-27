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

export {getItem, setItem}