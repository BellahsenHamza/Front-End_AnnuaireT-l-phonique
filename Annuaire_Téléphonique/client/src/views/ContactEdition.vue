<template>
  <div v-if="contact">
    <h2>Edition d'un contact</h2>
    <ErrorMessageComponent :key="error.name" v-for="error in errors" :error="error"/>
    <div class="field is-normal">
      <label class="label">Prenom</label>
      <div class="control">
        <input class="input" type="text" placeholder="Prenom" v-model="contact.prenom">
      </div>
    </div>

    <div class="field">
      <label class="label">Nom</label>
        <div class="control">
          <input class="input" type="text" placeholder="Nom" v-model="contact.nom">
        </div>
    </div>

    <div class="field">
      <label class="label">Courriel</label>
        <div class="control">
          <input class="input" type="text" placeholder="Courriel" v-model="contact.courriel">
        </div>
    </div>
    <div class="field">
      <label class="label">Genre</label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="genre" value="Male" v-model="contact.genre">
          Homme
        </label>
        <label class="radio">
          <input type="radio" name="genre" value="Female" v-model="contact.genre">
          Femme
        </label>
      </div>
    </div>
    <div class="field">
      <label class="label">Telephone</label>
        <div class="control">
          <input class="input" type="text" placeholder="Telephone" v-model="contact.telephone">
        </div>
    </div>
    <button class="button is-success" @click="save" >Sauvegarder</button>
    <button class="button" @click="annuler" >Annuler</button>

  </div>
</template>

<script>
import axios from 'axios';
import ErrorMessageComponent from '@/components/ErrorMessageComponent.vue';

export default {
  name: 'contact-edition',
  props: {
    contactId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      contact: null,
      errors: [],
    };
  },
  components: {
    ErrorMessageComponent,
  },
  methods: {
    async save() {
      if (this.checkForm()) {
        await axios.put(`http://localhost:3000/contacts/${this.contactId}`, this.contact);
        this.$router.push({ name: 'ListContact' });
      }
    },
    checkForm() {
      this.errors = [];
      if (this.contact.nom === '') {
        this.errors.push({ champ: 'Nom', message: 'Le champ nom est vide' });
      }
      if (this.contact.prenom === '') {
        this.errors.push({ champ: 'Prenom', message: 'Le champ prenom est vide' });
      }
      if (this.contact.genre === '') {
        this.errors.push({ champ: 'Genre', message: 'Le champ genre est vide' });
      }
      const emailRegex = /\S+@\S+[.]+\S/;
      if (!emailRegex.test(this.contact.courriel)) {
        this.errors.push({
          champ: 'Email',
          message: 'Le champ email est invalide et doit etre du format exemple@email.com',
        });
      }
      const phoneRegex = /[0-9]{3}[-][0-9]{3}[-][0-9]{4}/;
      if (!phoneRegex.test(this.contact.telephone)) {
        this.errors.push({
          champ: 'Telephone',
          message: 'Le telephone n\'est pas valide et doit etre du format 555-555-5555',
        });
      }
      if (this.errors.length > 0) {
        return false;
      }
      return true;
    },
    annuler() {
      this.$router.push({ name: 'ListContact' });
    },
  },
  async created() {
    this.contact = (await axios.get(`http://localhost:3000/contacts/${this.contactId}`)).data;
  },

};
</script>

<style scoped lang="scss">

</style>
