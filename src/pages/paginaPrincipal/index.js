import React, { Component } from 'react';
import { Box, Button, Card, CardMedia, Typography } from '@material-ui/core';
import './../style.css';
import { NavLink } from 'react-router-dom';


export default class index extends Component {

  render() {
    return (
      <div>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Card style={{ marginTop: '10vh' }}>
            <Typography variant='h2'>Escolha o que deseja usar</Typography>

            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
              <CardMedia style={{ margin: '50px 0px 20px' }}
                component="img"
                alt="Gif lista de itens"
                height="140"
                image='.' />
              <Typography variant='h5'>Lista de Itens</Typography>
              <NavLink to='/listadecompras'>
                <Button
                  variant='contained'
                  style={{ margin: '20px 0px' }}
                >Acessar</Button>
              </NavLink>
            </Box>
          </Card>
        </Box>
      </div>
    )
  }
}
