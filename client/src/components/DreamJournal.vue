<template>
  <div>
    <b-container>
      <h1 class="py-3">Dreams</h1>
      <b-table
        sticky-header
        class="py-3"
        striped
        hover
        :items="dreams"
        :fields="fields"
      >
        <template #cell(#)="row">
          <b-button
            v-b-modal.modal-lg
            size="sm"
            @click="info(row.item.body, row.item.title, $event.target)"
            class="mr-2"
          >
            Details
          </b-button>
        </template>
      </b-table>
      <b-modal
        header-bg-variant-secondary
        class="overflow-auto"
        :id="infoModal.id"
        scrollable
        :title="infoModal.title"
        ok-only
        @hide="resetInfoModal"
      >
        <b-container class="">
          <p>
            {{ infoModal.content }}
          </p>
        </b-container>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import DreamJournalService from "@/services/DreamJournalService";
export default {
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "index",
          sortable: true,
        },
        {
          key: "title",
          label: "title",
          sortable: false,
        },
        {
          key: "createdAt",
          label: "date",
          sortable: true,
        },
        {
          key: "#",
          label: "more info",
          sortable: false,
        },
      ],
      dreams: [],
      infoModal: {
        id: "modal-lg",
        title: "",
        content: "",
      },
    };
  },
  methods: {
    info(item, title, button) {
      this.infoModal.title = title;
      this.infoModal.content = item;
      //JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
  },
  async mounted() {
    try {
      this.dreams = (await DreamJournalService.getDreams()).data;
    } catch (error) {
      console.log("Something went wrong trying to fetch your dreams");
    }
  },
};
</script>

<style>
</style>
