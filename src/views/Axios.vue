<template>
    <v-container fluid>
        <v-card color="#B8860B">
    <v-container>
        <h1>Axios </h1>
        <v-col cols="" sm="" alignment ="center" justify ="center">
        <v-btn class="" @click="getQuestions">Get Post</v-btn>
        </v-col>
        <v-list-item
        v-for="question in questions"
        :key="question.id"
        >
    <v-card color="#B8860B">
        <v-container>
        <v-list-item-title>{{ question.question }}</v-list-item-title>
        <v-list-item>{{question.correct_answer}} </v-list-item>
        </v-container>
        </v-card>
    
        </v-list-item>
            </v-container>
            </v-card>
    </v-container>
    </template>
    
    <script setup>
        import { ref } from 'vue';
        import axios from 'axios'
        
        const questions=ref({})
        
async function getQuestions(){
            axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple%27').then(response =>{
                questions.value = (response.data.results)
            })
        }
        </script>