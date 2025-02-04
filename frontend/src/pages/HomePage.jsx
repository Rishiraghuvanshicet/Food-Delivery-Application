import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { SearchBar } from '../components/SearchBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FilterList from '../components/FilterList';
import { Box , Container, Divider} from '@mui/material';
import CardList from '../components/CardList';
import Banner from '../components/Banner';
import { TextAreaInfo } from '../components/TextAreaInfo';
import Footer from '../components/Footer';

const HomePage = () => {

    const [filterItem,setFilterItem]=useState('');

  return (
    <div>   
      <NavBar />
      <SearchBar />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography variant="h6"><FilterList setFilterItem={setFilterItem}/></Typography>
        </Grid>
        <Grid item xs={1}>
          <Divider orientation="vertical" sx={{ height: '100%', borderRightWidth: 2 }} />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6"><CardList filterItem={filterItem} /></Typography>
        </Grid>
      </Grid>

      <Box>
      <Banner/>
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',flexWrap:'wrap', gap:'10px', marginLeft:'50px', padding:"100px"}} >
        <CardList/>
      </Box>
      <Container>
      <TextAreaInfo/>
      </Container>
      <Box>
        <Footer/>
      </Box>
    </div>
  );
};

export default HomePage;
