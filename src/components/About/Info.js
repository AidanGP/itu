import React from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Image, Stack, HStack, CloseButton, Th
} from '@chakra-ui/react';

const Info = ({src, head, body, eyes, shirt, hair, isOpen, onClose}) => {

  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose} size={'xl'} motionPreset='scale'>
        <ModalOverlay />
        <ModalContent borderRadius={16} mx={{base: 64, md: 0}} bg={'#00233d'}>


          <ModalBody p={0} alignContent={'center'}>
            <Stack direction={{base: 'column', md: 'row'}} align={'center'}>
            <Image
              src={src}
              borderTopLeftRadius={16}
              borderBottomLeftRadius={{base: 0, md: 16}}
              borderTopRightRadius={{base: 16, md: 0}}
              maxW={{base: 250, md: 350}}
              display={{base: 'block', md: 'block'}}
              draggable={false}
            />
            <TableContainer>
              <HStack>
                <ModalHeader color={'#3cf7f7'} pr={2} fontWeight='extrabold' fontStyle='italic' fontSize={'4xl'}>TRAITS</ModalHeader>
                <CloseButton color={'white'} onClick={onClose} borderRadius={100} _focus={{outline: 'none'}} />
              </HStack>
              <Table variant={'simple'} color={'white'}>
                <Tbody>
                  <Tr>
                    <Th>HEAD</Th>
                    <Td>{head}</Td>
                  </Tr>
                  <Tr>
                    <Th>Body</Th>
                    <Td>{body}</Td>
                  </Tr>
                  <Tr>
                    <Th>Eyes</Th>
                    <Td>{eyes}</Td>
                  </Tr>
                  <Tr>
                    <Th>Shirt</Th>
                    <Td>{shirt}</Td>
                  </Tr>
                  <Tr>
                    <Th borderBottom={0}>Hair</Th>
                    <Td borderBottom={0}>{hair}</Td>
                  </Tr>
                </Tbody>
              </Table>

            </TableContainer>
            </Stack>
          </ModalBody>

          {/*<ModalFooter>*/}
          {/*  <Button colorScheme='blue' mr={3} onClick={onClose}>*/}
          {/*    Close*/}
          {/*  </Button>*/}
          {/*</ModalFooter>*/}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Info;