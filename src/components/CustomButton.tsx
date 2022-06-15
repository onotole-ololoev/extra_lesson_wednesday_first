import React from 'react';

type PropsType = {
  title: string;
  isButtonDisabled: boolean;
  onClick: () => void;
};

export const CustomButton: React.FC<PropsType> = React.memo(({title, isButtonDisabled, onClick}) => {
    let onClickHandler = () => {
        onClick();
    }


  return (
    <div>
      <button disabled={isButtonDisabled} onClick={onClickHandler}>
        {title}
      </button>
    </div>
  );
});
