import toast from "react-hot-toast";

const allFavorites = ()=>{
    const all = localStorage.getItem('favorites')
    if(all){
        const favorites = JSON.parse(all)
        console.log(favorites);
        return favorites;
    }else{
        console.log([]);
        return []
    }
}

const addFavorite =(coffee)=>{
// console.log(coffee);
const favorites= allFavorites()
const isExist = favorites.find(item=> item.id == coffee.id)
if(isExist)
    return toast.error('Already exist')
// console.log(favorites);
favorites.push(coffee)
localStorage.setItem('favorites', JSON.stringify(favorites))
toast.success('successfully added')
}

const removeFavorite =(id)=>{
    const favorites = allFavorites();
    const remaining = favorites.filter(coffee => coffee.id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success('successfully removed')

}
export {addFavorite,allFavorites, removeFavorite};
