<template>

  <div class="uk-padding-large">
    <div class="uk-width-1-1">
      <button class="uk-button" @click="newGame()">Новая игра</button>
      <button class="uk-button" @click="shuffle()">Перемешать</button>
    </div>
    <transition-group name="flip-list" tag="div" class="my-grid">
      <div  class="my-cell" v-for="cell of cells" v-bind:key="cell.id" @click="select(cell)" :class="{ready: cell.isReady}">
        <span :style="cell.cellStyle">{{ cell.value }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      cells: [],
      n: 100
    }
  },
  mounted() {
    this.newGame();
  },
  methods: {
    newGame(){
      this.cells = [];
      let i = 0;
      while (this.cells.length < this.n) {
        let value = this.random(1, this.n);
        let isHas = this.has(value);
        if (isHas) {
          continue;
        }
        i++;
        this.cells.push({
          id: i,
          value: value,
          isReady: false,
          cellStyle: {
            color: 'rgb(' + this.random(0, 200) + ',' + this.random(0, 200) + ',' + this.random(0, 200) + ')',
            fontSize: this.random(12,20) + 'px'
          }
        });
      }
    },
    random(min, max) {
      // получить случайное число от (min-0.5) до (max+0.5)
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
    has(value) {
      return this.cells.filter((item) => {
        return Number(item.value) === Number(value)
      }).length > 0
    },
    reOrder() {
      this.cells.filter((item) => {
        item.order = this.random(1, this.n);
      })
    },
    shuffle: function () {
      this.cells.sort(() => Math.random() - 0.5);
    },
    select(item){
      let readyCount = this.cells.filter((item) => item.isReady).length;
      if(item.value === readyCount + 1){
        item.isReady = true;
      }
      if(readyCount === this.n - 1){
        alert("Вы выиграли!");
        this.n += 10
        this.newGame();
      }
    }
  }
}
</script>
<style>
.my-grid {
  display: grid;
  grid-template-columns: repeat(10, 50px);
  grid-template-rows: repeat(10, 50px);
}

.my-cell {
  border: #255b42 solid 1px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

.flip-list-move {
  transition: transform 1s;
}
.ready{
  background: #42b983;
}
</style>
