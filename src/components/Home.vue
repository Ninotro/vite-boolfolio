<template>
    <div>
      <Header />
  
      <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
  
      <div class="pagination">
        <button @click="fetchPage(prevPageUrl)" :disabled="!prevPageUrl">Previous</button>
        <button @click="fetchPage(nextPageUrl)" :disabled="!nextPageUrl">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import ProjectCard from './components/ProjectCard.vue';
  import axios from 'axios';
  import Header from './components/Header.vue';
  
  export default {
    name: 'Home',
    components: {
      Header,
      ProjectCard,
    },
    data() {
      return {
        projects: [],
        prevPageUrl: null,
        nextPageUrl: null,
      };
    },
    mounted() {
      this.fetchPage('http://localhost:8000/api/projectIndex'); // Fetch initial page
    },
    methods: {
      fetchPage(url) {
        axios.get(url)
          .then(response => {
            this.projects = response.data.projects.data;
            this.prevPageUrl = response.data.projects.prev_page_url;
            this.nextPageUrl = response.data.projects.next_page_url;
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .pagination button {
    margin: 0 5px;
  }
  </style>
  