import React from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux';
import { getTrendsFilter, setFilterSlider } from '../redux/reducers/trendsReducer';

const HeadingFilter = React.memo(({title,type}) => {

    const {ind} = useSelector(({trending})=>{
        return {
            ind: type === 'movie' ? trending.movies.filterIndex : trending.tv.filterIndex
        }
    });

    const dispatch = useDispatch();
    const filter = [
        {time:'day',text:'Сегодня'},
        {time:'week',text:'Неделя'}
    ];

    const updateList = (time,index) => {
        dispatch(setFilterSlider(index,type));
        dispatch(getTrendsFilter(type,time));
    }

    return (
        <div className={"header-block d-block d-md-flex justify-content-between align-items-end"}>
            <h5>{title}</h5>
            <div className={"sort-button"}>
                {filter.map((filt,index)=>( <Button key={index} type={ind === index ? 'primary' : 'alternative'} onClick={()=>updateList(filt.time,index)}>{filt.text}</Button> ))}
            </div>
        </div>
    )
})

export default HeadingFilter;
