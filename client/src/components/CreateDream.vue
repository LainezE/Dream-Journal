<template>
  <div>
    <b-container>
      <h1 class="title pb-3 pt-3">
        <strong> Write Your Dream </strong>
      </h1>
      <b-alert v-model="showDismissibleAlert" variant="success" dismissible>
        Dream Created!
      </b-alert>
      <div>
        <b-form-group>
          <b-row align-h="center">
            <b-col>
              <label>Title</label>
              <b-form-input
                class="column"
                type=""
                v-model="title"
                name="title"
                placeholder="title"
                required
              />
            </b-col>
            <br />
            <b-col>
              <label>Date</label>
              <b-form-input
                class="column"
                type="date"
                v-model="date"
                name="date"
                required
              />
              <p>Date: '{{ date }}'</p>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group label="Body">
          <b-col>
            <b-form-textarea
              class="column"
              type=""
              rows="5"
              v-model="body"
              name="body"
              placeholder="Write your dream here"
              required
            />
          </b-col>
        </b-form-group>

        <label>Lucidity Level</label>
        <b-form-rating v-model="lucidity"></b-form-rating>
        <br />
        <div class="error" v-html="error" />
        <b-button class="shadow rounded" pill variant="dark" @click="submit">
          Submit
        </b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import authenticationService from "@/services/authenticationService";
import DreamJournalService from "@/services/DreamJournalService";
import store from "@/store/store.js";
import router from "vue-router";
export default {
  data() {
    return {
      title: "",
      body: "",
      date: null,
      lucidity: "",
      error: null,
      userID: store.getters.getUserID,
      showDismissibleAlert: false,
    };
  },
  methods: {
    submit() {
      try {
        console.log(store.getters.getUserID);
        const response = DreamJournalService.createDream({
          title: this.title,
          body: this.body,
          date: this.date,
          lucidity: this.lucidity,
          userID: store.getters.getUserID,
        });
        this.showDismissibleAlert = true;
        //this.$router.push("/DreamJournal");
      } catch (error) {
        console.log(response);
      }
    },
  },
};
</script>
