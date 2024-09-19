import { Button, Container, Form, Input, Title, TopBackground , InputLabel, ContainerInputs } from "./styles"

import UsersImage from './assets/users.png'




function Home() {

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt='imagem-usuarios'/>
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>
        <ContainerInputs>
          <div>
            <div>
            <InputLabel>Nome<span>*</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do usuário'/>
            </div>

            <div>
            <InputLabel>Idade<span>*</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do usuário'/>
            </div>
            
            <div>
            <InputLabel>Email<span>*</span>
            </InputLabel>
            <Input type='email' placeholder='E-mail do usuário'/>
            </div>
            
          </div>
          

        </ContainerInputs>
        <Button>Cadastrar Usuário</Button>
      </Form>


    </Container>
  )
}

export default Home
