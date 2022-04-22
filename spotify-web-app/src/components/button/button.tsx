import React, {useState} from 'react'

type Props = {
  statusSelect : boolean,
  removeFromList : (id: string) => void,
  addToList : (id: string) => void,
  id: string,
}

const Button = ({statusSelect, removeFromList, addToList, id} : Props) => {
  const [isSelected, setSelected] = useState<boolean>(statusSelect);

  const showMessage = () => {
    setSelected(!isSelected);
    if (isSelected) {
      removeFromList(id);
    } else {
      addToList(id);
    }
  };

  return (
    <>
      <div className='btn-container'>
        <button className="btn-add" onClick={showMessage}>{!isSelected ? 'Select' : 'Deselect'}</button>
      </div>
    </>
  );
};

export default Button;
