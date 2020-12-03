<template>
  <div>
    <h1>Annuaire téléphonique</h1>
    <button class="button" @click="add()">Ajouter un contact</button>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th v-for="colonne in colonnes" :key="colonne.id">
            {{ colonne.label }}
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          <ContactComponent
          v-for="contact in contacts"
          :key="contact.id"
          :contact="contact"
          @contact-delete="deleteContact(contact.id)"
          ></ContactComponent>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import ContactComponent from '@/components/ContactComponent.vue';

const colonnes = [
  { label: 'Nom', id: 1 },
  { label: 'Prénom', id: 2 },
  { label: 'Genre', id: 3 },
  { label: 'Courriel', id: 4 },
  { label: 'Téléphone', id: 5 },
];
export default {
  name: 'contacts-list',
  components: {
    ContactComponent,
  },
  data() {
    return {
      colonnes,
      contacts: [],
    };
  },
  methods: {
    async list() {
      this.contacts = (await axios.get('http://localhost:3000/contacts')).data;
    },
    add() {
      this.$router.push({ name: 'CreateContact' });
    },
    async deleteContact(id) {
      await axios.delete(`http://localhost:3000/contacts/${id}`);
      this.list(); // rafraichir automatiquement la page
    },
  },
  created() {
    this.list();
  },
};
</script>
