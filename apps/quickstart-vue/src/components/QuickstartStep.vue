<script setup lang="ts">
interface Props {
  output: string;
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
            <code>Hit "Run" above to create DID</code>
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