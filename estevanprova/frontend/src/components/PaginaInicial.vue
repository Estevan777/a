<template>
<h3>RECEITA</h3>

<div>
<label>Nome</label>
  <input
    :value="receita.nome"
    @input="event => nome = event.target.value">

  <label>Tempo de preparo</label>
  <input
    :value="receita.tempo_preparo"
    @input="event => nome = event.target.value" type="number">
    
  <label>Custo aproximado</label>
  <input
    :value="receita.custo_aproximado"
    @input="event => nome = event.target.value" type="number">

    <button @click="enviar()" class="mt-3" type="button">Salvar</button>
</div> 

<div>
  <span class="mt-3" v-for="item in receitas">
    {{item}}
    <button @click="remover(item.id)" class="mt-3" type="button">Remover</button>
    <button @click="editar(item)" class="mt-3" type="button">Editar</button>
  </span>
</div> 
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue"
import axios from "axios"

const receita = ref({})
const receitas = ref([]);
onMounted(async () => {
  await init()
});

async function init() {
  const {data} = await axios.get("http://localhost:3000/receitas")
  console.log(data)

  receitas.value = data
}

const enviar = async function() {
  await axios.post("http://localhost:3000/receitas", {
    nome: receita.nome,
    tempo_preparo: receita.tempo_preparo,
    custo_aproximado: receita.custo_aproximado
  })

  await init();
}

const remover = async function(id) {
  await axios.delete("http://localhost:3000/receitas/" + id)

  await init();
}

function editar(item) {
  receita.value = item
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

div {
  margin: 0 15rem 0 15rem;
  display: flex;
  flex-direction: column
}

.mt-3 {
  margin-top: 1.5rem
}
</style>
