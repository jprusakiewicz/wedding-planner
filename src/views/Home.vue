<template>
  <div class="home">
    <div class="big-container">
      <div class="small-container">
        <h1>Future weddings</h1>
        <div class="wedding button" @click="goToCurrentWedding">
          <div class="date">6 Jun 2025</div>
          <div class="time">15:00</div>
          <div class="names">Anna Klimek & Michał Matlęga</div>
        </div>
        <div class="wedding button" @click="goToCurrentWedding">
          <div class="date">11 Jun 2025</div>
          <div class="time">13:00</div>
          <div class="names">Katarzyna Nowak & Piotr Kowalski</div>
        </div>
        <div class="wedding button" @click="goToCurrentWedding">
          <div class="date">12 Jun 2025</div>
          <div class="time">14:30</div>
          <div class="names">Magdalena Wójcik & Tomasz Zając</div>
        </div>
        <div class="wedding button" @click="goToCurrentWedding">
          <div class="date">19 Jun 2025</div>
          <div class="time">14:00</div>
          <div class="names">Agnieszka Wiśniewska & Marek Jankowski</div>
        </div>
        <div class="wedding button" @click="goToCurrentWedding">
          <div class="date">20 Jun 2025</div>
          <div class="time">15:00</div>
          <div class="names">Joanna Zielińska & Krzysztof Nowicki</div>
        </div>
        <div class="wedding button" @click="goToCurrentWedding">
          <div class="date">27 Jun 2025</div>
          <div class="time">15:00</div>
          <div class="names">Elżbieta Majewska & Jakub Wróblewski</div>
        </div>
        <div class="wedding button" @click="goToCurrentWedding">
          <div class="date">29 Jun 2025</div>
          <div class="time">15:00</div>
          <div class="names">Ewa Kaczmarek & Adam Stępień</div>
        </div>
      </div>
    </div>
    <div class="big-container">
      <div>
      <div class="small-container">
        <h1>Todays Wedding</h1>
        <div class="button disabled" @click="goToCurrentWedding">Current Wedding
        </div>
      </div>
      </div>
      <div id="notifications">
      <div class="small-container">
        <h1>Notifications</h1>

        <div class="button" @click="goToFutureWeddings">Notification 1</div>
        <div class="button" @click="goToFutureWeddings">Notification 2</div>
        <div class="button" @click="goToFutureWeddings">Notification 3</div>
        <div class="button" @click="goToFutureWeddings">Notification 4</div>
        <div class="button" @click="goToFutureWeddings">Notification 5</div>
        <div class="button" @click="goToFutureWeddings">Notification 6</div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToCurrentWedding() {
      this.$router.push({ name: 'CurrentWedding' });
    },
    goToFutureWeddings() {
      this.$router.push({ name: 'Weddings' });
    },
    goToAddWedding() {
      this.$router.push({ name: 'AddWedding' });
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  text-align: center;
  width: 100%;
  height: 98vh;
  width: 80%; /* Adjust width as needed */;
}

.big-container {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 50%;
  margin-top: 40px;
  padding-left: 150px;
}

.small-container {
  display: flex;
  flex-direction: column; /* Changes layout to vertical */
  align-items: center; /* Centers children horizontally */
  margin-top: 40px;
  overflow: hidden; /* Hides overflow content */
  background: #ffffff4d;
  border-radius: 8px;
}

.button {
  width: 80%; /* Each div takes up the full width of .weddings-container */
  padding: 20px;
  background-color: #f0f0f0; /* Light grey background */
  border: 1px solid #ccc; /* Grey border */
  border-radius: 5px; /* Slightly rounded corners */
  margin-bottom: 20px; /* Adds space between the two divs */
}
.disabled {
  background-color: #ccc; /* Grey background for disabled button */
  cursor: not-allowed; /* Changes cursor to indicate non-interactivity */
}

.button:hover{
  background-color: #e2e2e2; /* Lighter grey background on hover */
  cursor: pointer; /* Changes the cursor to a pointer to indicate interactivity */
}
#notifications {
  margin-top: 140px;
  height: auto;
  overflow: hidden; /* Hides overflow content */
  
}
</style>