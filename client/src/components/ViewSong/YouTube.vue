<!-- eslint-disable-next-line -->
<!-- eslint-disable  -->
<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="330">
    </youtube>
  </panel>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {  
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
