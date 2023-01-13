import{ useRef, useState } from 'react';

function useDropdown() {

    const [visible,setVisible] = useState(false);

    const selectRef = useRef();
    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath()) || event.composedPath(event.target); // данная строкча позволяет в Firefox также использолвать путь. Но для firefox мы дополнительн указываем что path - это это путь до клика
          if (!path.includes(selectRef.current)) { // path это путь состоящий из массива, где указан весь путь DOM элементов до места клика мыши. Includes - это метод в JS, который ищет в массиве что-то конкретное
              setVisible(false);
          }
      }

    const handleVisible = () => {
        setVisible(!visible)
    }

    return { visible,selectRef,handleOutsideClick,handleVisible }

}

export default useDropdown
