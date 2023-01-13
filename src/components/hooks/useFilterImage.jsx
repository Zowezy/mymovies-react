import empty from '../../assets/bigItem.jpg';

function useFilterImage(src,...params) {
    let img;
    params.map((item)=>{
        if (item !== undefined) {
            img = item;
        }
        return img;
    })
    return img ? src+img : empty;
}

export default useFilterImage
