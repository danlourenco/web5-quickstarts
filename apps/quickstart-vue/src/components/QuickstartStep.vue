<script setup lang="ts">
interface Props {
  cta: string;
  output: string;
  success: string;
}
const props = defineProps<Props>()

</script>
<template>
    <section>
        <h1>
            <slot name="heading"></slot>
        </h1>
        <pre>
            <code>
                <slot name="code"></slot>
            </code>
        </pre>
        <button @click="$emit('run-step')">Run!</button>
        <details :open="props.output ? true : false">
          <summary>
            <code>
              <span v-if="!props.output">{{  props.cta }}
              </span>
              <span v-else>{{ props.success }}
              </span>
            </code>
          </summary>
          <textarea :value="props.output"></textarea>
        </details>
    </section>
</template>

<style scoped>
textarea {
    width: 100%;
    height: 200px;
}
</style>