<template>
  <!--div id="d-api-zone"></div-->
    <VueDaumPostcode @complete="sendAPIdata" />
  
</template>

<script>
export default {
  data: function () {
    return {
      test: 0,
    };
  },
  methods: {
    sendAPIdata: function (resp) {
      //this.emitter.emit("daumZipResult", resp);
      console.log(':::' + resp);
      window.opener.postMessage({ result: resp }, "*");
      window.close();
    },
  },
};
</script>

<style>
#d-api-zone {
  position: fixed;
  left: 2px;
  top: 2px;
  border: 2px solid black;
  max-height: 80%;
  overflow-y: scroll;
}
</style>
