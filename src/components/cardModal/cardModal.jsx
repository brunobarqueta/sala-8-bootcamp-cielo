import PropTypes from 'prop-types';

import { Modal, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchRequired } from '../../store/actions/search';
import { ButtonStyle, CardModalStyle, FooterModalStyle, HeaderModalStyle } from './Styles'
import { useProductProvider } from '../../App';
import CloseIcon from '@mui/icons-material/Close';
import CarouselProdutos from '../carousel/carousel';

const CardModal = ({open, setOpen, index}) => {

  const {list} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
		dispatch(searchRequired('sho', 2));
	}, [])

  const handleClose = () => {
    setOpen(false);
  };

  const { updateTextFieldValue } = useProductProvider();

  const [localValue, setLocalValue] = useState(0); 

  const handleInputChange = (event) => {
    setLocalValue(event.target.value);
  };

  const handleUpdateClick = () => {
    updateTextFieldValue(localValue);
  };

  const clearInput = () => {
    setLocalValue(0);
    updateTextFieldValue(0);
  }

  return (
    <>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}
      >
        <CardModalStyle>
          <HeaderModalStyle>
            <ButtonStyle onClick={handleClose}>
              <CloseIcon />
            </ButtonStyle>
          </HeaderModalStyle>
          <CarouselProdutos productsList={list} index={index} />
          <FooterModalStyle>
            <ButtonStyle onClick={clearInput}>
              <DeleteIcon sx={{ color: 'white' }}/>
            </ButtonStyle>
            <TextField
              type="number"
              InputProps={{
                inputProps: {
                  min: 0,
                  step: 1,
                },
              }}
              style={{ width: 60 }}
              value={localValue}
              onChange={handleInputChange}
            />
            <ButtonStyle type='submit' onClick={handleUpdateClick}>
              <DoneAllIcon sx={{ color: 'white' }}/>
            </ButtonStyle>
          </FooterModalStyle>
        </CardModalStyle>
      </Modal>
    </>
  );
};

CardModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  index: PropTypes.number,
};

CardModal.defaultProps = {
  open: false,
  setOpen: () => {},
  index: 0,
};

export default CardModal;
