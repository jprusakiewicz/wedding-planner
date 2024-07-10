<template>
    <div class="weddings-view">
        <wedding-list></wedding-list>

    </div>
</template>

<script>
import WeddingList from '@/components/WeddingList.vue';

export default {
    components: {
        WeddingList
    }
};
</script>

<style scoped>
.weddings-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
</style>