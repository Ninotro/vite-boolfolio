<template>
    <div>
      
      <h2>Dettagli del Progetto</h2>
      <div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <!-- Aggiungi altre informazioni sul progetto -->
      </div>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import axios from 'axios';
  
  export default {
    name: 'ProjectDetails',
    components: {
      Header,
    },
    data() {
      return {
        project: {},
      };
    },
    mounted() {
      this.fetchProject();
    },
    methods: {
      fetchProject() {
        const projectId = this.$route.params.id;
        axios.get(`/project/${projectId}`)
          .then(response => {
            this.project = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
  
  <style>
  /* Stili per la pagina dei Dettagli del Progetto */
  </style>
  