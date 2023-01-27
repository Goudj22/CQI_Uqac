import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function AddressForm() {
  return (
    <React.Fragment>
      <h1>Formulaire objet trouvé</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="firstName"
            name="firstName"
            label="Nom de l'objet"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label="Heure"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Description de l'objet"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="state"
            name="state"
            label="Nom de l'employé"
            fullWidth
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