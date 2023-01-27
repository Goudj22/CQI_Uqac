import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export default function AddressForm() {
  return (
    <React.Fragment>
      <h1>Créer un compte</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            id="firstName"
            name="firstName"
            label="Prénom"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="lastName"
            name="lastName"
            label="Nom de famille"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="lastName"
            name="lastName"
            label="Rôle"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Button 
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          >
            Soumettre
        </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
              Consulter
          </Button>
    </React.Fragment>
  );
}