import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useSpring, animated } from 'react-spring'; // Ensure you've imported animated

// Create an animated version of the MUI Box component
const AnimatedBox = animated(Box);

interface SearchProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSearchChange: (searchTerm: string) => void;
}

const SearchProfileModal: React.FC<SearchProfileModalProps> = ({ isOpen, onClose, onSearchChange }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const animationStyle = useSpring({
        to: {
            opacity: 1,
            transform: isOpen ? 'translate(-50%, -50%) translateY(0)' : 'translate(-50%, -50%) translateY(-100px)',
        },
        from: {
            opacity: 0,
            transform: 'translate(-50%, -50%) translateY(-100px)',
        },
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSearchQuery(newValue);
        onSearchChange(newValue); // Call onSearchChange directly with the new value
    };

    const modalContent = (
        <AnimatedBox style={animationStyle} sx={style}>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <h2 id="modal-title">Search Interns</h2>
            <TextField
                label="Search interns..."
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleChange} // Use handleChange here
                sx={{ mb: 2, input: { color: 'grey.800' }, label: { color: 'grey.500' } }}
            />
        </AnimatedBox>
    );

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            {modalContent}
        </Modal>
    );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 370,
    bgcolor: 'background.paper',
    borderRadius: 3,
    border: 'none',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    p: 4,
    outline: 'none',
};

export default SearchProfileModal;

// import React, { useState } from 'react';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';

// interface SearchProfileModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const SearchProfileModal: React.FC<SearchProfileModalProps> = ({ isOpen, onClose }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     console.log('Searching profiles for:', searchQuery);
//     // Implement your search logic here. For example, fetching profile data from an API.
//   };

//   const modalContent = (
// <Box sx={style}>
//   <h2 id="modal-title">Search Profiles</h2>
//   <TextField
//     label="Search profiles..."
//     variant="outlined"
//     fullWidth
//     value={searchQuery}
//     onChange={(e) => setSearchQuery(e.target.value)}
//     onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//     sx={{ mb: 2 }}
//   />
//   <Button
//     variant="contained"
//     color="primary"
//     startIcon={<SearchIcon />}
//     onClick={handleSearch}
//   >
//     Search
//   </Button>
// </Box>
//   );

//   return (
//     <Modal
//       open={isOpen}
//       onClose={onClose}
//       aria-labelledby="modal-title"
//       aria-describedby="modal-description"
//     >
//       {modalContent}
//     </Modal>
//   );
// };

// // Adjust the styling as necessary to fit your design preferences
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default SearchProfileModal;
