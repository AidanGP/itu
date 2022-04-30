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

const Info = ({src, head, skin, outfit, eyes, mouth, food, back, isOpen, onClose}) => {

  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose} size={'xl'} motionPreset='scale'>
        <ModalOverlay />
        <ModalContent borderRadius={16} mx={{base: 64, md: 0}} bg={'#00233d'}>


          <ModalBody p={0}>
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
                <ModalHeader pl={3} color={'#3cf7f7'} pr={2} pb={0} pt={1} fontWeight='extrabold' fontStyle='italic' fontSize={'4xl'}>TRAITS</ModalHeader>
                <CloseButton color={'white'} onClick={onClose} borderRadius={100} _focus={{outline: 'none'}} />
              </HStack>
              <Table variant={'none'} color={'white'}>
                <Tbody>
                  <Tr>
                    <Th pl={4}>HEAD</Th>
                    <Td p={0}>{head}</Td>
                  </Tr>
                  <Tr>
                    <Th pl={4}>Skin</Th>
                    <Td p={0}>{skin}</Td>
                  </Tr>
                  <Tr>
                    <Th pl={4}>Outfit</Th>
                    <Td p={0}>{outfit}</Td>
                  </Tr>
                  <Tr>
                    <Th pl={4}>Eyes</Th>
                    <Td p={0}>{eyes}</Td>
                  </Tr>
                  <Tr>
                    <Th pl={4}>Mouth</Th>
                    <Td p={0}>{mouth}</Td>
                  </Tr>
                  <Tr>
                    <Th pl={4}>Food</Th>
                    <Td p={0}>{food}</Td>
                  </Tr>
                  <Tr>
                    <Th pl={4} borderBottom={0}>Back</Th>
                    <Td borderBottom={0} p={0}>{back}</Td>
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