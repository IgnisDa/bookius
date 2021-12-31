// import { useCreateUserShelfMutation } from '@bookius/generated';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   InputGroup,
//   Modal,
//   ModalCloseButton,
//   ModalContent,
//   ModalOverlay,
//   Switch,
//   Textarea,
//   VStack,
// } from '@chakra-ui/react';
// import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';

// interface CreateShelfDialogProps {
//   isOpen: boolean;
//   setIsOpen: (newValue: boolean) => void;
//   refreshShelves: () => void;
// }

// const CreateShelfDialog: FunctionComponent<CreateShelfDialogProps> = ({
//   isOpen,
//   setIsOpen,
//   refreshShelves,
// }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [isPublic, setIsPublic] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const [, executeCreateUserShelfMutation] = useCreateUserShelfMutation();

//   const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>
//     setName(event.target.value);

//   const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
//     setDescription(event.target.value);

//   const handleIsPublicChange = (event: ChangeEvent<HTMLInputElement>) =>
//     setIsPublic(event.target.checked);

//   const onSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const { data } = await executeCreateUserShelfMutation({
//       input: { name: name, description: description, isPublic: isPublic },
//     });
//     if (data?.createUserShelf.__typename === 'ShelfDto') {
//       setIsLoading(false);
//       setIsOpen(false);
//       refreshShelves();
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       closeOnOverlayClick={!isLoading}
//       onClose={() => setIsOpen(false)}
//       isCentered
//     >
//       <ModalOverlay h="100%" w="100%" />
//       <ModalContent mx={3}>
//         <ModalCloseButton isDisabled={isLoading} />
//         <VStack
//           onSubmit={onSubmit}
//           as="form"
//           maxW="md"
//           w="full"
//           overflow="hidden"
//           p={6}
//           verticalAlign="middle"
//           display="inline-block"
//           rounded={8}
//           spacing={4}
//           textAlign="left"
//         >
//           <Box>
//             <Heading size="md" textAlign="left">
//               Create a shelf
//             </Heading>
//           </Box>
//           <FormControl isRequired>
//             <FormLabel htmlFor="name" hidden>
//               Name
//             </FormLabel>
//             <InputGroup>
//               <Input
//                 id="name"
//                 value={name}
//                 onChange={handleNameChange}
//                 isDisabled={isLoading}
//                 variant="outline"
//                 placeholder="Name"
//               />
//             </InputGroup>
//           </FormControl>
//           <FormControl>
//             <FormLabel htmlFor="description" hidden>
//               Description
//             </FormLabel>
//             <InputGroup>
//               <Textarea
//                 id="description"
//                 value={description}
//                 onChange={handleDescriptionChange}
//                 isDisabled={isLoading}
//                 resize="none"
//                 variant="outline"
//                 placeholder="Description"
//               />
//             </InputGroup>
//           </FormControl>
//           <FormControl display="flex" alignItems="center">
//             <FormLabel htmlFor="isPublic" mb="0">
//               Publicly visible?
//             </FormLabel>
//             <Switch
//               id="isPublic"
//               checked={isPublic}
//               onChange={handleIsPublicChange}
//             />
//           </FormControl>
//           <Button
//             colorScheme="green"
//             type="submit"
//             isLoading={isLoading}
//             loadingText="Submitting"
//           >
//             Submit
//           </Button>
//         </VStack>
//       </ModalContent>
//     </Modal>
//   );
// };

// interface CreateShelfButtonProps {
//   refreshShelves: () => void;
// }

// export const CreateShelfButton: FunctionComponent<CreateShelfButtonProps> = ({
//   refreshShelves,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <CreateShelfDialog
//         isOpen={isOpen}
//         setIsOpen={setIsOpen}
//         refreshShelves={refreshShelves}
//       />
//       <Button colorScheme="green" onClick={() => setIsOpen(true)}>
//         Create
//       </Button>
//     </>
//   );
// };
export {};
