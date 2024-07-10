<template>
  <div class="main">
    <h1>{{ wedding.title }}</h1>
    <div class="wedding-details">
      <div class="details">
        <p>Date: {{ wedding.date }}</p>
        <p>Location: {{ wedding.location }}</p>
        <p>Planned guests number: {{ wedding.guests }}</p>
        <p>Description: {{ wedding.description }}</p>
      </div>
      <div class="edit-panel">
        <button>edit details</button>
        <button>remove</button>
        <button>download agreement</button>

      </div>
    </div>
    <div class="survey-wrapper">
      <div class="survey-status">
        <div v-if="surveyFilled">
          Survey status: <span>&#10003;</span> <!-- Tick symbol -->
        </div>
        <div v-else>
          Survey status: <span>&#10007;</span> <!-- X symbol -->
        </div>
      </div>
      <div v-if="!surveyFilled" class="survey-link">
        <a :href="`/weddings/${this.weddingId}/survey`"><button>Please fill out the survey</button></a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'WeddingDetails',
  data() {
    return {
      wedding: {
        title: 'Sample Wedding',
        date: '2022-12-31',
        location: 'Willa Love',
        guests: 100,
        description: 'This is a sample wedding description.',
        name: "Kowalski"
      }
    };
  },
  created() {
    // Extract the `id` parameter from the URL and store it in `weddingId`
    this.weddingId = this.$route.params.id;
  },
};
</script>


<style scoped>
.main {
  margin: 20px;
  display: flex; /* Makes .wedding-details a flex container */
  justify-content: center; /* Centers children horizontally */
  flex-direction: column;
}
  
h1 {
  text-align: center;
}
.wedding-details {
  display: flex; /* Makes .wedding-details a flex container */
  justify-content: center; /* Centers children horizontally */
}

.edit-panel {
  width: 200px; /* Adjust the width as needed */
  display: flex;
  flex-direction: column; /* Aligns any children of the panel vertically */
  justify-content: center; /* Centers the panel's content vertically */
  align-items: center;
}
.edit-panel button {
    font-size: 13px; /* Adjust the font size as needed */
    padding: 10px 15px; /* Adjust the padding as needed */
    margin-bottom: 10px; /* Add space between buttons */
  }
.survey-wrapper {
  text-align: center;
  margin-top: 20px; /* Add space between the details and the survey status */
}

.survey-wrapper button {
    margin-top: 15px;
    font-size: 13px; /* Adjust the font size as needed */
    padding: 10px 15px; /* Adjust the padding as needed */
    margin-bottom: 10px; /* Add space between buttons */
  }
</style>