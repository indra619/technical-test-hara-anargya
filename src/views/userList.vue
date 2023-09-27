<template>
  <div>
    <Data1 :data="plugin1Data" />

    <Data2 :data="plugin1Data" />

    <Data3 :data="plugin1Data" />

    <table>
      <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Job</th>
            <th>Country</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.id }}</td>
            <div class="avatar">
              <img :src="user.profile_picture" alt="User Avatar" />
              </div>
            <td>{{ user.first_name + ' ' + user.last_name }}</td>
            <td>{{ user.date_of_birth}}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.job }}</td>
            <td>{{ user.country }}</td>
            <td>
            <button @click="selectUser(index)">Select</button>
            <button @click="viewDetails(index)">View Details</button>
          </td>
        </tr>
      </tbody>
    </table>

    <UserDialog
      :show-details-dialog="showDetailsDialog"
      :selected-user="selectedUser"
      @close="closeDetailsDialog"
    />

  </div>
</template>

<script>
import axios from 'axios'
import userDialog from '/src/components/userDialog.vue'
import Data1 from './plugins/Data1.vue'
import Data2 from './plugins/Data2.vue'
import Data3 from './plugins/Data3.vue'

export default {

  components: {
    Data1,
    Data2,
    Data3,
    userDialog
  },
  
  props: {
    users: Array,
  },

  data() {
    return {
      // Add data properties for dialog control
      users: [],
      showDetailsDialog: false,
      selectedUser: null,
      plugin1Data: '5002.84',
      plugin2Data: '78.09',
      plugin3Data: '8912.22',
      name: '',
      date: '',
    }
  },
     mounted() {
      this.getUsers()
  },
  methods: {
    
    getUsers(){
        axios.get('https://api.slingacademy.com/v1/sample-data/users')
        .then(response =>{
            console.log(response)
            let data = response.data
            this.users = data.users
        }).catch(error =>{
          console.log(error)
        })
        
    },

    viewDetails(index) {
      // Set the selected user and show the dialog
      this.selectedUser = this.users[index];
      this.showDetailsDialog = true;
    },

    closeDetailsDialog() {
      // Close the dialog
      this.showDetailsDialog = false;
    },
    
    selectUser(index) {
      // Handle select user action here
      console.log(`Selected user: ${this.users[index].name}`);
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles for the avatars here */
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
