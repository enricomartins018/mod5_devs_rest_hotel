import { Button, Modal, Box } from "@mui/material";

import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "24",
  p: 4,
};

const ModalDelete = ({ open, handleClose, deletaReserva }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={style}>
        <h2 id="parent-modal-title">Cuidado</h2>
        <p id="parent-modal-description">
          Tem certeza que deseja excluir essa reserva?
        </p>
        <Button variant="contained" color="primary">
          Cancelar
        </Button>
        <Button variant="contained" color="warning" onClick={deletaReserva}>
          Excluir
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalDelete;
