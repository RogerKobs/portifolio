import React, { Component } from 'react'
import { Box, Button, Card, Fab, Typography } from '@material-ui/core'
import '../style.css';

export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grupos: [],
      cor: '#FFF'
    };
  }


  handleCriarGrupo = () => {

    var teste = document.getElementById("teste");
    teste.style.background = 'red';

  }

  handleMudarCor = (cor) => {

  }

  render() {
    return (
      <div>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Card style={{ width: '60vw', marginTop: '10vh' }}>
            <Box display='flex' flexDirection='row' justifyContent='space-between'>
              <Typography>Lista de itens</Typography>
              <Box>
                <Fab onClick={ this.handleMudarCor("vermelho") } >a</Fab>
                <Fab>a</Fab>
                <Fab>a</Fab>
                <Fab>a</Fab>
                <Button variant='contained'
                  onClick={this.handleCriarGrupo}
                >Criar novo grupo</Button>
              </Box>
            </Box>
          </Card>
        </Box>
      </div>
    )
  }
}
