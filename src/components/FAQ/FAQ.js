import React from 'react'
import {
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from '@chakra-ui/react'

import '../h.css'
import overlay2 from '../../images/overlay2.png'
const FAQItem = ({ q, a }) => {
    return (
        <AccordionItem border={0} bgColor='#004863' borderRadius={16} my={8} boxShadow='xl'>
            <h2>
                <AccordionButton _focus={{ outline: 0 }} _hover={{}}>
                    <Box px={2} py={6} flex='1' textAlign='left' fontSize={24} fontWeight='700'>
                        {q}
                    </Box>
                    <AccordionIcon fontSize={48} />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={6} px={6} fontWeight={500} align='left'>
                {a}
            </AccordionPanel>
        </AccordionItem>
    )
}


function FAQ() {
    return (
        <Box w='100%' bgColor='#00233d' bgImage={overlay2} id='FAQ'>
            <Box mx={{ base: 12, lg: 32 }} py={32} align='center'>
                <Box align='center' pb={10}>
                    <Heading size="4xl" className='g'>FAQ</Heading>
                </Box>
                <Accordion allowMultiple maxW={850}>
                    <FAQItem q='What is an NFT' a='An NFT refers to a “Non-fungible Token”, which is a one-of-a-kind asset that lives online on a digital ledger. You can buy, own and trade your NFTs as you do with any other type of physical artwork or collectible item. Since blockchain technology transparently shows the ownership of NFTs, if you own one – everyone can look up your ownership!' />
                    <FAQItem q='What is Into The Unknown?' a='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo non nisi imperdiet tincidunt vel at dolor. Sed auctor tempor consectetur. Maecenas lobortis nunc ut fringilla feugiat. Donec vel neque eros. Nam sit amet elit massa. Vestibulum nunc nisi, commodo rhoncus tincidunt vitae, dictum id nibh.' />
                    <FAQItem q='What is the Pre-Sale Mint cost?' a='TBA' />
                    <FAQItem q='What is the Public Mint cost?' a='TBA' />
                    <FAQItem q='When are the Mint Dates?' a='TBA' />
                </Accordion>
            </Box>
        </Box>
    )
}

export default FAQ