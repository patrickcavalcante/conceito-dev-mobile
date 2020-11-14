import React, {useEffect, useState} from 'react';
import {SafeAreaView,View,FlatList,Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import api from './services/api';

export default function App(){

    const [projects , setProjects]  = useState([]);

    useEffect(() => {
        api.get('projects').then(response =>{
            console.log(response.data);
            setProjects(response.data);
        });
    },[]);

    async function handleAddProject () {
       const response = await api.post('projects', {
           title: `Novo Projeto ${Date.now()}`,
           owner:'Patrick cavalcante'
       });

       const project = response.data

       setProjects([...projects, project])
    }

    return(
        <>
        {/* <View style={styles.container}>
            {projects.map(project => (
            <Text style={styles.project} key={project.id}>{project.title}</Text>
            ))}
        </View> */}
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#7159c1"/>
            <FlatList
               data={projects}
               keyExtractor={project => project.id}
               renderItem={({ item: project}) =>(
               <Text style={styles.project} key={project.id}>{project.title}</Text>  
              )}
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.buttom} onPress={handleAddProject}>
                <Text style={styles.buttonText}>Adicionar Projeto</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
 
    container:{
        flex:1,
        backgroundColor:'#7159c1',
    },
    Text:{
        color:"#fff",
        fontSize: 30
    },
    project:{
        color:'#fff',
        fontSize:30
    },
    buttom:{
        backgroundColor:'#fff',
        height:50,
        margin: 10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:16
    }
});