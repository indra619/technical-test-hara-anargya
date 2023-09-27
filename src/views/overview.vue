<template>
  <div>
    <h2>Provinsi and Kota</h2>
    
    <!-- Input field to accept ID Provinsi -->
    <div>
      <label for="provinsiId">Enter ID Provinsi:</label>
      <input type="text" id="provinsiId" v-model="provinsiId" />
      <button @click="getKota">Get Kota</button>
    </div>
    
    <!-- Display Kota based on ID Provinsi -->
    <div v-if="kota">
      <p>Kota for ID Provinsi {{ provinsiId }}: <tr>
       {{ kota }}
       </tr>
       </p>
    </div>
    
    <!-- Input field to accept ID Kota -->
    <div>
      <label for="kotaId">Enter ID Kota:</label>
      <input type="text" id="kotaId" v-model="kotaId" />
      <button @click="getProvinsi">Get Provinsi</button>
    </div>
    
    <!-- Display Provinsi based on ID Kota -->
    <div v-if="provinsi">
      <p>Provinsi for ID Kota {{ kotaId }}: {{ provinsi }}</p>
    </div>
    
    <!-- List Provinsi in ascending order -->
    <div>
    <h2>List of Provinces</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="province in sortedProvinces" :key="province.id">
          <td>{{ province.id }}</td>
          <td>{{ province.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import  city  from '/src/assets/js/city.js'
import  province  from '../assets/js/province.js'

export default {
  data() {
    return {
      provinsiId: "",
      kotaId: "",
      kota: null,
      provinsi: null,
      city ,
      province
    }
  },
  computed: {
     sortedProvinces() {
      return this.sortProvinces();
  },
  },

  methods: {
    getKota() {
      // Simulate fetching Kota based on Provinsi ID
      // Replace with your actual data fetching logic
      const provinsiId = parseInt(this.province.id);
      // Implement your logic to find Kota based on provinsiId here
      let name = this.city.name
      this.kota = name ; // Replace with the actual Kota data
    },
    getProvinsi() {
      // Simulate fetching Provinsi based on Kota ID
      // Replace with your actual data fetching logic
      const kotaId = parseInt(this.kotaId);
      // Implement your logic to find Provinsi based on kotaId here
      this.provinsi = this.province.name; // Replace with the actual Provinsi data
    },
   sortProvinces() {
      // Clone the original provinces array to avoid modifying it directly
      const provinces = [...province()];

      // Sort by ID in ascending order
      provinces.sort((a, b) => a.id - b.id);

      // Sort by name in ascending order (if IDs are the same)
      provinces.sort((a, b) => {
        if (a.id === b.id) {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });

      return provinces;
    },
  },

}
</script>

<style scoped>
/* Add your CSS styles here */
</style>
