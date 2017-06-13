<template>
  <div class="app">
    <h1>{{ title }}</h1>
    <h3>{{ description }}</h3>
    <div class="characterSelect">
      <!-- convert to select -->
      <select name="characters" id="characters" v-model="character">
        <option value="alisa">Alisa</option>
        <option value="feng">Feng</option>
        <option value="law">Law</option>
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>command</th>
          <th>orientation</th>
          <th>damage</th>
          <th>frames</th>
          <th>on block</th>
          <th>one hit</th>
          <th>on CH</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="move in moves">
          <td>{{ move.command }}</td>
          <td>{{ move.orientation }}</td>
          <!-- move to computed -->
          <td>{{ move.damage.toString() }}</td>
          <td>{{ move.frames }}</td>
          <td>{{ move.block }}</td>
          <td>{{ move.hit }}</td>
          <td>{{ move.ch }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    title: 'Welcome to Tekken Rooster',
    description: 'Let\'s build a more dynamic delivery for Tekken\'s frame data!',
    character: 'alisa',
    moves: []
  }),
  mounted () {
    this.getMoves(this.character)
  },
  methods: {
    getMoves (url) {
      axios
        .get(`./static/data/${url}.json`)
        .then(response => {
          this.moves = response.data
        })
    }
  },
  watch: {
    'character': function (newVal, oldVal) {
      this.getMoves(newVal)
    }
  },
  computed: {
    // let's fuck with some json results here
  }
}
</script>

<style lang="scss" scoped>

h1, h3 {
  margin: 0;
}

.characterSelect {
  margin: 2rem 0;
  select {
    -webkit-appearance: none;
    padding: 1rem;
    border-radius: 0;
    font-size: 1rem;
    width: 50vw;
  }
}
  table {
    border-collapse: collapse;
    font-size: 1rem;
    text-align: left;
    width: 100%;
  }

  thead {
    tr {
      background-color: #ddd;
    }
  }

  tbody {
    tr {
      vertical-align: middle;
      &:nth-of-type(odd) {
        background-color: #eee;
      }
    }
  }

  td, th {
    padding: 1rem;
  }

  th {
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  td {
    font-family: "Lucida Console", Monaco, monospace;
    font-size: .8rem;
  }
</style>
