import React, { useContext, useState } from 'react';
import './mainInfo.scss';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import Input from '../input/Input';
import { CountryDropdown } from 'react-country-region-selector';
import InputWithFormik from '../InputWithFormik/InputWithFormik';
import Select from '../select/Select';
import { sex, Sex } from '../../constants/constants';
import SelectWithFormik from '../SelectWithFormik/SelectWithFormik';
import { Country } from '../../constants/Countries';

const MainInfo: React.FC = () => {
  const [country, setCountry] = useState('');
  const selectCountry = (val: string) => {
    setCountry(val);
  };

  return (
    <Tile>
      <Box boxShadow={2} className="tile">
        <h1>Main Info</h1>
        <InputWithFormik label="Name" name="name" type="text" />
        <InputWithFormik label="Surname" name="surname" type="text" />
        <div className="sex-wrapper">
          <SelectWithFormik label="Sex" name="sex" options={sex} />
        </div>
        <InputWithFormik label="Birthday" name="birthday" type="date" max={new Date().toISOString().substring(0, 10)} />
        <div className="country-selector">
          <SelectWithFormik label="Country" name="country" options={Object.keys(Country)} />
        </div>
      </Box>
    </Tile>
  );
};

export default MainInfo;
