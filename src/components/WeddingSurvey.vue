<template>
    <div class="wedding-survey">
        <h1>Wedding Survey</h1>
        <form @submit.prevent="submitSurvey">
            <div class="form-group">
                <label for="weddingDate">Wedding Date:</label>
                <input type="date" id="weddingDate" v-model="weddingDetails.date" required>
            </div>
            
            <div class="form-group">
                <label for="weddingTime">Wedding Time:</label>
                <input type="time" id="weddingTime" v-model="weddingDetails.time" required>
            </div>
            
            <div class="form-group">
                <label for="brideName">Bride's Name:</label>
                <input type="text" id="brideName" v-model="weddingDetails.brideName" required>
            </div>
            
            <div class="form-group">
                <label for="groomName">Groom's Name:</label>
                <input type="text" id="groomName" v-model="weddingDetails.groomName" required>
            </div>
            
            <div class="form-group">
                <label for="guests">Number of Guests:</label>
                <input type="number" id="guests" v-model="weddingDetails.guests" required>
            </div>
            
            <button type="submit">Submit Survey</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            weddingDetails: {
                date: '',
                time: '',
                brideName: '',
                groomName: '',
                guests: 0
            }
        };
    },
    methods: {
        submitSurvey() {
            // Logic to handle the submission of the survey
            // This could involve validating the input, and then saving the data to a database or sending it to an API
            console.log("Survey submitted:", this.weddingDetails);
            // Redirect or notify the user after submission
        }
    }
};
</script>

<style scoped>
.wedding-survey .form-group {
    margin-bottom: 20px;
}
.wedding-survey{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>