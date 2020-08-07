<template>
  <div class="file-upload-wrapper">
    <input
      type="file"
      class="file-upload"
      :data-max-file-size="maxSize"
      :data-default-file="defaultFile"
      :disabled="disabled"
      :data-height="height"
      ref="file-uploadd"
    />
  </div>
</template>

<script>
import '../mdb-file-upload'

export default {
  // props: ['maxSize', 'height', 'defaultFile', 'disabled'],
  data() {
    return {
      maxSize: '2M',
      height: 200,
      defaultFile: 'https://mdbootstrap.com/img/Others/documentation/1.jpg',
      disabled: null
    }
  },
  mounted () {
    $('.file-upload').file_upload();
  },
}
</script>