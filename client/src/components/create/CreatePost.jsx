import { useState, useEffect, useContext } from 'react';
import { styled, Box, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}));

const InputTextField = styled(InputBase)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  fontSize: '18px',
  color: '#333',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '50%',
  boxSizing: 'border-box',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: 'green',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkgreen',
  },
}));

const initialRide = {
  tripId: '',
  driverName: '',
  driverPhoneNumber: '',
  cabNumber: '',
  createdDate: new Date(),
};

const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [ride, setRide] = useState(initialRide);
  const [file, setFile] = useState('');
  const { account } = useContext(DataContext);

  useEffect(() => {
    const submitRide = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);
        // const response = await API.uploadFile(data);
        // Assuming there's some logic here related to handling images if needed
      }

      ride.categories = location.search?.split('=')[1] || 'All';
      ride.username = account.username;

      //   let response = await API.CreatePost(ride);

      //   if (response.isSuccess) {
      //     navigate('/');
      //   }
    };

    submitRide();
  }, [file]);

  const handleChange = (e) => {
    setRide({ ...ride, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <StyledFormControl>
        <InputTextField placeholder="Trip ID" onChange={(e) => handleChange(e)} name="tripId" />
        <InputTextField placeholder="Driver Name" onChange={(e) => handleChange(e)} name="driverName" />
        <InputTextField
          placeholder="Driver Phone Number"
          onChange={(e) => handleChange(e)}
          name="driverPhoneNumber"
        />
        <InputTextField placeholder="Cab Number" onChange={(e) => handleChange(e)} name="cabNumber" />
      </StyledFormControl>

      <SubmitButton onClick={() => navigate('/')}>Submit</SubmitButton>
    </Container>
  );
};

export default CreatePost;
