<template>
  <div id="rpv-date-panel">
    <div class="day-of-week">
      {{dayOfWeek}}
    </div>
    <div class="date-long">
      {{dateFormatted}}
    </div>
    <div class="date-iso">
      {{isoDateFormatted}}
    </div>
    <div class="timezone">
      {{timeZoneFormatted}}
    </div>
  </div>
</template>

<script>
  import 'moment-timezone'
  import moment from 'moment'

  let user_zone = moment.tz.guess()
  console.log('User time zone', user_zone)

  export default {
    name: 'date-panel',
    props: ['now'],
    computed: {
      dateFormatted: function () {
        return this.now.format('MMM Do')
      },
      isoDateFormatted: function () {
        return this.now.format('Y-MM-DD')
      },
      dayOfWeek: function () {
        return this.now.format('dddd')
      },
      timeZoneFormatted: function () {
        // return this.now.format('z Z')
        return this.now.tz(user_zone).format('Z z')
      }
    }
  }
</script>

<style scoped>
  #rpv-date-panel {
    height: 100%;
  }

  .timezone {
    font-size: 90%
  }
</style>
