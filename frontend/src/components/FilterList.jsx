import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Typography } from "@mui/material";

const FilterList = ({setFilterItem}) => {
  const handleChange = (event) => {
    setFilterItem( event.target.value);
  };

  return (
    <Box sx={{disply:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center', marginTop:'20px'}}> 
      <FormControl>
        <Typography variant="H2" sx={{padding:'10px'}}>Food Catageries</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
          onChange={handleChange} 
        >
          <FormControlLabel value="burger" control={<Radio />} label="Burger" />
          <FormControlLabel value="pizza" control={<Radio />} label="Pizza" />
          <FormControlLabel value="momos" control={<Radio />} label="Momos" />
          <FormControlLabel value="cakes" control={<Radio />} label="Cakes" />
          <FormControlLabel value="dosa" control={<Radio />} label="Dosa" />
          <FormControlLabel value="idle" control={<Radio />} label="Idle" />
          <FormControlLabel value="pav-bhaji" control={<Radio />} label="Pav Bhaji" />
          <FormControlLabel value="noodles" control={<Radio />} label="Noodles" />
          <FormControlLabel value="biryani" control={<Radio />} label="Biryani" />
          <FormControlLabel value="rolls" control={<Radio />} label="Rolls" />
          <FormControlLabel value="pasta" control={<Radio />} label="Pasta" />
          <FormControlLabel value="pastry" control={<Radio />} label="Pastry" />
          <FormControlLabel value="shakes" control={<Radio />} label="Shakes" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default FilterList;