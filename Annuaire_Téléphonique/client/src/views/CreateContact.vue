<template>
  <div class="create-contact">
    <h2>Ajout d'un contact</h2>
    <ErrorMessageComponent v-for="error in errors" :key="error.name" :error="error" />
    <div class="field">
      <label class="label">Nom</label>
      <div class="control">
        <input class="input" type="text" v-model="contact.nom" placeholder="Ajouter un nom">
      </div>
    </div>
    <div class="field">
      <label class="label">Prénom</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="contact.prenom"
          placeholder="Ajouter un prénom">
      </div>
    </div>
    <div class="field">
      <label class="label">Courriel</label>
      <div class="control">
        <input class="input"
               type="text"
               v-model="contact.courriel"
               placeholder="Ajouter un courriel">
      </div>
    </div>
    <div class="field">
      <label  class="label">Genre</label>
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
      <label class="label">Numéro de téléphone</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="contact.telephone"
          placeholder="Ajouter un numéro de téléphone">
      </div>
    </div>
    <button class="button is-success" @click="create">Ajouter</button>
    <button class="button" @click="annuler">Annuler</button>
  </div>
</template>

<script>
import axios from 'axios';
import ErrorMessageComponent from '@/components/ErrorMessageComponent.vue';

export default {
  name: 'contact-create',
  data() {
    return {
      contact: {
        nom: null,
        prenom: null,
        courriel: null,
        genre: null,
        telephone: null,
      },
      errors: [],
    };
  },
  components: {
    ErrorMessageComponent,
  },
  methods: {
    async create() {
      if (this.checkForm()) {
        await axios.post('http://localhost:3000/contacts/', this.contact);
        this.$router.push({ name: 'ListContact' });
      }
    },
    annuler() {
      this.$router.push({ name: 'ListContact' });
    },
    checkForm() {
      this.errors = [];
      if (this.contact.nom == null) {
        this.errors.push({ champ: 'Nom', message: 'Le champ nom est vide' });
      }
      if (this.contact.prenom == null) {
        this.errors.push({ champ: 'Prenom', message: 'Le champ prenom est vide' });
      }
      if (this.contact.genre == null) {
        this.errors.push({ champ: 'Genre', message: 'Le champ genre est vide' });
      }
      const emailRegex = /\S+@\S+[.]+\S/;
      if (!emailRegex.test(this.contact.courriel)) {
        this.errors.push({ champ: 'Email', message: 'Le champ email est invalide et doit etre du format exemple@email.com' });
      }
      const phoneRegex = /[0-9]{3}[-][0-9]{3}[-][0-9]{4}/;
      if (!phoneRegex.test(this.contact.telephone)) {
        this.errors.push({ champ: 'Telephone', message: 'Le telephone n\'est pas valide et doit etre du format 555-555-5555' });
      }
      if (this.errors.length > 0) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
