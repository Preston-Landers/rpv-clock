<template>
  <div id="rpv-main-panel" class="main-panel">
    <div class="rpv-clock-weather">
      <div class="rpv-clock">
        <div class="rpv-clock-time rpv-mono">
          <span class="rpv-clock-hours">{{hoursFormatted}}</span>
          <span class="rpv-clock-colon">:</span>
          <span class="rpv-clock-minutes">{{minutesFormatted}}</span>

        </div>
        <div class="rpv-clock-ampm-seconds">
          <div class="rpv-ampm rpv-mono" :class="amPmClass">
            {{amPmFormatted}}
          </div>
          <div class="rpv-seconds rpv-mono">{{secondsFormatted}}</div>
        </div>
      </div>
      <div class="rpv-date-weather">
        <div class="rpv-weather">
          Weather
        </div>
        <div class="rpv-date">
          <date-panel :now="now"></date-panel>
        </div>
      </div>
    </div>
    <div class="rpv-ticker">
      News headlines here.
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import DatePanel from './DatePanel.vue'

  export default {
    components: {DatePanel},
    name: 'main-panel',
    data () {
      return {
        updateIntervalMS: 500,
        createdAtDate: moment(new Date()),
        now: moment(new Date()),
        msg: 'Welcome!'
      }
    },
    computed: {
//      mainTimeFormatted: function () {
//        return this.now.format('h:mm')
//      },
      amPmFormatted: function () {
        return this.now.format('a')
      },
      hoursFormatted: function () {
        return this.now.format('h')
      },
      minutesFormatted: function () {
        return this.now.format('mm')
      },
      secondsFormatted: function () {
        return this.now.format('ss')
      },
      amPmClass: function () {
        if (this.now.hour() >= 12) {
          return 'rpv-is-pm'
        }
        return 'rpv-is-am'
      }
    },
    mounted: function () {
      let self = this
      setInterval(function () {
        // console.log('updating ticker')
        self.now = moment(new Date())
      }, self.updateIntervalMS)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-panel {
    height: 100%;
  }

  .rpv-clock-weather {
    height: 75%;
  }

  .rpv-ticker {
    height: 25%;
  }

  .rpv-clock {
    width: 80%;
    float: left;
    height: 100%;
    display: flex;
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */

  }

  .rpv-is-pm {
    font-variant: small-caps;
  }

  .rpv-is-am {
    font-style: italic;
  }

  .rpv-mono {
    /*font-family: 'VT323', monospace;*/
    font-family: 'Inconsolata', monospace;
    font-weight: bold;
  }

  .rpv-clock-time {
    font-size: 50vh;
    transform: scale(1, 1.7);
  }

  .rpv-clock-colon {
    margin-left: -30vh;
    margin-right: -30vh;
    position: relative;
    top: -5vh;
  }

  .rpv-clock-ampm-seconds {
    margin-left: 5vh;
    margin-right: -15vh;
  }

  .rpv-ampm {
    font-size: 18vh;
  }

  .rpv-seconds {
    font-size: 20vh;
  }

  .rpv-date-weather {
    width: 20%;
    float: left;
    height: 100%;
  }

  .rpv-weather {
    height: 50%;
  }

  .rpv-date {
    height: 50%;
  }

</style>
