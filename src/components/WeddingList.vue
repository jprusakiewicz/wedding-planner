<template>
  <div class="wedding-list-container">
    <h1>Wedding List</h1>
    <ul>
      <li v-for="wedding in weddings" :key="wedding.id">
        <a :href="`/weddings/${wedding.id}`">{{ wedding.name }}</a>
      </li>
      <li>
        <a :href="`/add-wedding`">Add wedding</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weddings: [
        { id: 1, name: 'Wedding 1' },
        { id: 2, name: 'Wedding 2' },
        { id: 3, name: 'Wedding 3' }
      ]
    };
  }
};
</script>

<style scoped>

/* Container styling */
.wedding-list-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers items vertically in the container */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;
}

/* Header styling */
h1 {
  color: #333;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

/* List styling */
ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #fff;
  /* Continue with existing styles */
}
</style>