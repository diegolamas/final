import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import imagemCoruja from "../../assets/coruja.png"

export function AlunoInicialScreen() {
  const [aulas, setAulas] = useState([
    {
      id: "1",
      nome: "Aula 10 - Variáveis"
    },
    {
      id: "2",
      nome: "Aula 11 - Variáveis"
    },
    {
      id: "3",
      nome: "Aula 12 - Variáveis"
    },
    {
      id: "4",
      nome: "Aula 13 - Variáveis"
    },
    {
      id: "5",
      nome: "Aula 14 - Variáveis"
    },
    {
      id: "6",
      nome: "Aula 13 - Variáveis"
    },
    {
      id: "7",
      nome: "Aula 14 - Variáveis"
    },
    {
      id: "8",
      nome: "Aula 13 - Variáveis"
    },
    {
      id: "9",
      nome: "Aula 14 - Variáveis"
    },
  ]);

  /* useEffect(() => {
     async function getAula() {
       // Requisição para o endpoint da api
       const aula = (api.get(`/aulas/${route.params?.id}`)).data;
       {
         id: 1,
         nome: "Aula 10 - Variáveis"
       }
     }
   }, []);
   */

  function renderAula({ item }) {
    return (
      <TouchableOpacity style={styles.botao} >
          <Text style>{item.nome}</Text>
        </TouchableOpacity>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.imagemCoruja} source={imagemCoruja} />
      </View>

      <View style={styles.container2}>
        <FlatList 
          data={aulas}
          renderItem={renderAula}
          keyExtractor={item => item.id}
        />
      </View>



    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: "#C9D6D0",

  },
  container2: {
    flex: 1,
    backgroundColor: "#C9D6D0",
    alignItems:'center',
  },
  imagemCoruja: {
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 150,
    marginVertical: 70,
    marginHorizontal: 145,
    
  },
  botao: {
    alignItems:'center',
    justifyContent:"center",
    width: 250,
    height: 50,
    backgroundColor: "#F5FEFE",
    borderRadius: 20,
    paddingLeft: 10,
    margin: 15,
  }
})

