<template>
  <div>
    <h1>Add Wedding</h1>
    <form @submit.prevent="addWedding">
      <label for="brideName">Bride Name:</label>
      <input type="text" id="brideName" v-model="brideName" required>
      
      <label for="groomName">Groom Name:</label>
      <input type="text" id="groomName" v-model="groomName" required>
      
      <label for="weddingDate">Wedding Date:</label>
      <input type="date" id="weddingDate" v-model="weddingDate" required>
      
      <button type="submit">Add Wedding</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      surnameName: '',
      weddingDate: '',
      homeAddress: '',
      email: '',
      phoneNumber: '',
      guestsNumber: 0

    };
  },
  methods: {
    addWedding() {
      // Perform the logic to add the wedding
      // You can access the form data using this.brideName, this.groomName, this.weddingDate
      // For example, you can make an API call to save the wedding details
      // After successful addition, you can redirect the user to the wedding list page
    }
  }
};
</script>

<style scoped>
/* Add custom styles for the AddWedding component */
</style>