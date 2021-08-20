import React, { Component } from "react";
import styled from "styled-components";
import Img from './assets/add.svg'
import Car from './assets/car.svg'
import Remove from './assets/remove.svg'

const Container = styled.div`
  width: 70%;
  flex-wrap: wrap;
`
const MainObjetos = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
`

const BoxListCar = styled.div`
width: 184px;
height: 110px;
// border: 2px solid green;
display: flex;
font-size: 15px;
margin: 10px;
flex-wrap: wrap;
`

const ListCar = styled.div`
width: 185px;
// background-color: blue;
border: 1px solid #000000;
`

const BoxCarName = styled.div`
display: flex;
justify-content: space-between;
background-color: #DCDCDC;
`

const InfoCar = styled.p`
display: flex;
`
const BoxCarShop = styled.div`
display: flex;
justify-content: flex-end;
flex-wrap: wrap;
`

const BtnAdd = styled.button`
display: flex;
`

const ImageCar = styled.img`
width: 200px;
margin-left: 8rem;
`

const BoxImageCar = styled.div`
width: 530px;
height: 600px;
// border: 2px solid green;
overflow-y: scroll;
`
const BoxObjetos = styled.div `
  width: 40%;
  border: 2px solid black;
  `
const BtnClear = styled.button `
font-size: 25px;
cursor: pointer;
&:hover {
  background-color: red;
}
`
const Total = styled.p `
  font-size: 20px;
  color: #2F4F4F;
`



class App extends Component {
  state = {
    Carros: [],
    ListadeCarros: [
      {
        nome: "Jetta",
        montadora: "Volkswagen",
        preco: 146000,
        tipo: "SUV",
        id: 1
      },
      {
        nome: "Polo",
        montadora: "Volkswagen",
        preco: 70000,
        tipo: "Hatch",
        id: 2
      },
      {
        nome: "T-Cross",
        montadora: "Volkswagen",
        preco: 123000,
        tipo: "SUV",
        id: 3
      },
      {
        nome: "Tiguan R-line",
        montadora: "Volkswagen",
        preco: 146000,
        tipo: "SUV",
        id: 4
      },
      {
        nome: "Civic",
        montadora: "Honda",
        preco: 115000,
        tipo: "Sedan",
        id: 5
      },
      {
        nome: "Corolla",
        montadora: "Toyota",
        preco: 110000,
        tipo: "Sedan",
        id: 6
      },
      {
        nome: "Corolla Cross",
        montadora: "Volkswagen",
        preco: 184000,
        tipo: "SUV",
        id: 7
      },
      {
        nome: "Compass",
        montadora: "Jeep",
        preco: 132000,
        tipo: "SUV",
        id: 8
      },
      {
        nome: "Golf F TI",
        montadora: "Volkswagen",
        preco: 138000,
        tipo: "Hatch",
        id: 9
      }
    ],
    res: ""
  };

  
  add = (id, item) => {
    const carros = this.state.Carros
    const Elementos = this.state.ListadeCarros.find((item) => item.id === id)
    
    this.setState({
      res: this.state.res.concat(carros),
      Carros: this.state.Carros.concat(Elementos)
    })
  };
  
  remover = (id) => {
    this.setState({
      Carros: this.state.Carros.filter((item) => {
        return item.id !== id;
      })
    });
  };

  removeTudo = () => {
    this.setState({
      Carros: []
    })
  }
  
  
  render() {
    return (
      <div>
        <Title>Lojas de Carros!</Title>
        <div>
          <Container>
            <MainObjetos>
              {this.state.ListadeCarros.map((item, index) => (
                <BoxListCar key={index}>
                  <ListCar>
                    <BoxCarName key={index}>
                      {item.nome}
                      <BtnAdd>
                        <img onClick={() => this.add(item.id)} src={Img} />
                      </BtnAdd>
                    </BoxCarName>
                    <InfoCar>
                      Montadora: {item.montadora}
                    </InfoCar>
                    <InfoCar>
                      Preço: {item.preco}
                    </InfoCar>
                    <InfoCar>
                      Tipo: {item.tipo}
                    </InfoCar>
                  </ListCar>
                  <BoxCarName>
                  </BoxCarName>
                </BoxListCar>
              ))}
              <BoxCarShop>

              </BoxCarShop>
            </MainObjetos>
          </Container>
        </div>
        <BoxObjetos>
        <BoxImageCar>
          <ImageCar src={Car} />
          {this.state.Carros.length > 0 &&
            this.state.Carros.map((item, index) => (
              <BoxListCar key={index}>
                <ListCar>
                  <BoxCarName key={index}>
                    {item.nome}
                    <BtnAdd onClick={() => {
                      this.remover(item.id)
                    }}>
                      <img src={Remove} />
                    </BtnAdd>
                  </BoxCarName>
                  <InfoCar>
                    Montadora: {item.montadora}
                  </InfoCar>
                  <InfoCar>
                    Preço: {item.preco}
                  </InfoCar>
                  <InfoCar>
                    Tipo: {item.tipo}
                  </InfoCar>
                </ListCar>
                <BoxCarName>
                </BoxCarName>
              </BoxListCar>
            ))}
        </BoxImageCar>
            <Total>Total: R${this.state.Carros.reduce((h, i) => h + i.preco, 0)}</Total>
            <BtnClear onClick={this.removeTudo}>Clear</BtnClear>
        </BoxObjetos>
      </div>
    );
  }
}

export default App;
