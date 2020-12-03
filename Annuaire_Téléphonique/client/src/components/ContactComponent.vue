<template>
  <tr>
    <td>{{ contact.nom }}</td>
    <td>{{ contact.prenom }}</td>
    <td>{{ contact.genre }}</td>
    <td>{{ contact.courriel }}</td>
    <td>{{ contact.telephone }}</td>
    <td>
      <button class="button is-small" @click="edit(contact)">Modifier</button>
      <button class="button is-small is-danger" @click="supp()">Supprimer</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ContactComponent',
  props: {
    contact: Object,
  },
  methods: {
    supp() {
      this.$emit('contact-delete', this.contact);
    },
    edit(contact) {
      this.$router.push({
        name: 'ContactEdition',
        params: { contactId: contact.id },
      });
    },
  },
};
</script>
