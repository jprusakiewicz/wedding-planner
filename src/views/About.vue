<template>
  <div class="about">
    <h1>About</h1>
    <p>Welcome to the Wedding Planner web app! This app allows wedding managers to easily manage future weddings.</p>
    <p>Here are some of the features:</p>
    <ul>
      <li>View a list of weddings</li>
      <li>View the details of a specific wedding</li>
      <li>Add a new wedding</li>
    </ul>
    <p>Feel free to explore the app and start planning your dream weddings!</p>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
}

ul {
  margin-bottom: 10px;
}

li {
  margin-bottom: 5px;
}
</style>