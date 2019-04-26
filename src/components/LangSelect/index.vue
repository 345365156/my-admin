<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <svg-icon class-name="international-icon" icon-class="language"></svg-icon>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">
        中文
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">
        English
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      language: localStorage.getItem('language') ? localStorage.getItem('language') : ''
    }
  },
  computed: {
    // language() {
    //   // return this.$store.getters.language
    // }
  },
  methods: {
    handleSetLanguage(lang) {
      this.language = lang
      this.$i18n.locale = lang
      localStorage.setItem('language', lang)
      // this.$store.dispatch('app/setLanguage', lang)
      this.$message({
        message: this.$t('msg.switchLanguage'),
        type: 'success'
      })
    }
  },
  watch: {
    language: function(n, o) {
      this.language = n
      localStorage.setItem('language', n)
    }
  }
}
</script>
