<template>
    <div class="project-card">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <p>Difficulty: {{ project.difficulty }}</p>
      <!-- Aggiungi altri dettagli del progetto se necessario -->
    </div>
  </template>
  
  <script>
  export default {
    name:'ProjectCard',
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .project-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  </style>