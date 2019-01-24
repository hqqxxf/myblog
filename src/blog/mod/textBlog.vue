<template>
  <div class="h-editor">
    <!--<quill-editor ref="myTextEditor"-->
                  <!--v-model="content"-->
                  <!--:config="editorOption"-->
                  <!--@blur="onEditorBlur($event)"-->
                  <!--@focus="onEditorFocus($event)"-->
                  <!--@ready="onEditorReady($event)">-->
    <!--</quill-editor>-->


    <!-- If you need to manually control the data synchronization, you can monitor the code change event like this（如果你需要手动控制数据流，就需要像这样手动监听changed事件） -->
    <quill-editor ref="myTextEditor"
    :content="content"
    :config="editorOption"
    @change="onEditorChange($event)">
    </quill-editor>
  </div>
</template>
<script>
  import {quillEditor} from 'vue-quill-editor'
  export default{
    data () {
      return {
        content: 'I am Example',
        editorOption: {
          // something config
        }
      }
    },
    methods: {
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange ({editor, html, text}) {
        // console.log('editor change!', editor, html, text)
        this.content = html
      }
    },
    computed: {
      editor () {
        return this.$refs.myTextEditor.quillEditor
      }
    },
    mounted () {
      console.log('this is my editor', this.editor)
    },
    components: {
      quillEditor
    }
  }
</script>
