<template>
  <div>
    <b-container>
        <h1 class="py-3">Dreams</h1>
      <b-table class="py-3" striped hover :items="items"></b-table>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import DreamJournalService from '@/services/DreamJournalService'
export default {
  data() {
    return {
      dreams: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  methods: {
      getDreams() {

      }
  },
  async mounted () {
      this.dreams = await DreamJournalService.index()
  }
};
</script>

<style>
</style>