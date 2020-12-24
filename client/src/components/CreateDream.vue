<template>
  <div>
    <b-container>
      <h1 class="title pb-3 pt-3">
        <strong> Write Your Dream </strong>
      </h1>
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
export default {
  data() {
    return {
      title: "",
      body: "",
      date: "",
      lucidity: "",
      error: null,
    };
  },
  methods: {
    async submit() {
      try {
        response = await DreamJournalService.createDream({
          title: this.title,
          body: this.body,
          date: this.date,
          lucidity: this.lucidity,
        });

      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
