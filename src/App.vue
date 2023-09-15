<script setup lang="ts">
import {onMounted, ref} from "vue";
import {timeTableEvents} from "./mocks/mocks.js";
import {images} from './assets/image'

const currentTime = ref<string>('')
const currentEvent = ref([])
const timeTable = ref([])
const eventIndex = ref(null)

onMounted(() => {
  const date = new Date()
  currentTime.value = date.toLocaleTimeString()
  checkCurrentEvent(currentTime.value)

  setInterval(() => {
    const date = new Date()
    currentTime.value = date.toLocaleTimeString()
    checkCurrentEvent(currentTime.value)
  }, 60000)
})

const checkCurrentEvent = (time) => {
  const formattedTime = time.slice(0, 5)
  console.log(formattedTime);
  for (let i = 0; i < timeTableEvents.value.length; i += 4){

    const slicedTable = timeTableEvents.value.slice(i, i + 4)
    for (let j = 0; j < slicedTable.length; j++){
      if(formattedTime >= slicedTable[j].date.from && formattedTime < slicedTable[j].date.to){
        // console.log(j)
        if(j === 0){
          eventIndex.value = 'first'
        }else if(j === 3){
          eventIndex.value = 'last'
        }else{
          eventIndex.value = null
        }

        timeTable.value = []
        for (let k = 0; k < slicedTable.length; k++){
          timeTable.value.push({
            from: slicedTable[k].date.from,
            to: slicedTable[k].date.to,
          })
        }

        currentEvent.value = []
        currentEvent.value.push(slicedTable[j])
        return;
      } else{
        timeTable.value = []
        eventIndex.value = null
        currentEvent.value = []
      }
    }
  }
}



</script>

<template>
  <div class="conf">
    <div
        class="conf__halls"
        :class="{
            'conf__halls_last-event': eventIndex === 'last',
            'conf__halls_first-event': eventIndex === 'first'
         }"
    >
      <div class="conf__hall conf__hall-first">
        <div class="conf__speaker-info">
          <h2 class="conf__halls-title">Лекторий</h2>
          <p class="conf__halls-content">{{currentEvent[0]?.events.firstHall["event-title"]}}</p>
          <p class="conf__halls-speaker">{{ currentEvent[0]?.events.firstHall["speaker-name"] }}</p>
        </div>
        <div class="conf__speaker-img" v-if="currentEvent[0]" :style="{backgroundImage: 'url(' + currentEvent[0]?.events.firstHall.picture + ')'}"></div>
        <div class="conf__speaker-img" v-else :style="{backgroundImage: 'url(' + images.ConfImg + ')'}"></div>
      </div>
      <div class="conf__hall conf__hall-first">
        <div class="conf__speaker-info">
          <h2 class="conf__halls-title">Зал 2</h2>
          <p class="conf__halls-content">{{currentEvent[0]?.events.secondHall["event-title"]}}</p>
          <p class="conf__halls-speaker">{{currentEvent[0]?.events.secondHall["speaker-name"]}}</p>
        </div>
        <div class="conf__speaker-img" v-if="currentEvent[0]" :style="{backgroundImage: 'url(' + currentEvent[0]?.events.secondHall.picture + ')'}"></div>
        <div class="conf__speaker-img" v-else :style="{backgroundImage: 'url(' + images.ConfImg + ')'}"></div>
      </div>
    </div>
    <div class="conf__timings"
         :style="{
            justifyContent: timeTable.length <= 3 ? 'flex-start' : 'space-between',
            rowGap: timeTable.length <= 3 ? '71px' : '0px'
          }">
      <div class="conf__timing"
           v-for="time in timeTable"
           :class="
            {
              conf__timing_active: currentTime >= time?.from && currentTime < time?.to,
              'conf__timing_active-first': currentTime >= time?.from && currentTime < time?.to && eventIndex === 'first',
              'conf__timing_active-last': currentTime >= time?.from && currentTime < time?.to && eventIndex === 'last'
            }"
      >
        <div class="conf__timing-wrapper" >
          {{time.from}} - {{time.to}}
        </div>
      </div>
    </div>

  </div>
</template>


