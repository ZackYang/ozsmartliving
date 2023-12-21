
'use client';


import { Button, Card, Carousel, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Register from './auth/register';
import Login from './auth/login';
import { useRef } from 'react';

export default function Auth({
  setOpenModal,
  openModal
}: {
  setOpenModal: Function,
  openModal: boolean
}) {
  return (
    <>
      <Modal size='md' show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <h2 className='text-3xl text-gray-800 font-bold text-center'>
            <span className='text-teal-500'>OZ</span>SMART+LIVING
          </h2>
        </Modal.Header>
        <Modal.Body className='overflow-hidden'>
          <div className='flex flex-row gap-16'>
            <Login />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
