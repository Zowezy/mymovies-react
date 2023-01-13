import { useDispatch } from 'react-redux';
import { deleteProfileItems, getProfileItems} from '../../redux/reducers/authReducer';

function useProfileFunction(section) {

    const dispatch = useDispatch();

    const getItems = (accountId,type,session,category,page) => {
        // section === 'rated'
        // ? dispatch(getRatedList(type,accountId,session,category,page))
        // : dispatch(getFavoriteItems(type,accountId,session,category,page))
        dispatch(getProfileItems(type,accountId,session,category,page));
    }

    const deleteItem = (accountId,type,session,id,category) => {
        // section === 'rated'
        // ? dispatch(deleteRateItem(type,id,session,category))
        // : dispatch(deleteFavoriteItem(type,accountId,session,id,category))
        dispatch(deleteProfileItems(type,accountId,session,id,category));
    }

    return { getItems, deleteItem}

}

export default useProfileFunction
