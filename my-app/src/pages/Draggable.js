import React, { useState, useRef } from 'react';


function Draggable() {
	
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
  var selArray = [];
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(position);
  }

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(position);
  }

  const drop = () => {
     let getListItems = [...list];
     let getDragItem = getListItems[dragItem.current];
     let getDragOverItem = getListItems[dragOverItem.current];
     getListItems.splice(dragItem.current, 1);
     getListItems.splice(dragOverItem.current, 0, getDragItem);
     setList(getListItems);
     console.log(getListItems);
    //dragItem.current = position;
  }

  const getSelected = (e, getId) => {
      const checked = e.target.checked;
      if(checked){
        selArray.push(getId);
      }else{
        selArray = selArray.filter(item => item !== getId);
      }

      console.log(selArray);
      
      
      
      
  }
 
 
  return (
    <>
    {
    list&&
    list.map((item, index) => (

      <div style={{margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable><input type='checkbox' onChange={(e) => getSelected(e, index+1)} style={{marginRight:'20px'}} name='list' />

          {item}
      </div>
      ))}
    </>
  );
}

export default Draggable;