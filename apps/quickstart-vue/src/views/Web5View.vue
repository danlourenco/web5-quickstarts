<script setup lang="ts">
import  QuickstartStep from '../components/QuickstartStep.vue';
import { useWeb5Store } from '../stores/web5';

const web5Store = useWeb5Store();
</script>

<template>
  <main>
    <QuickstartStep @run-step="web5Store.createDid" :success="Created!" :output="web5Store.did" >
    <template #heading>Create a Decentralized Identifier (DID)</template>
    <template #code>
      <br />
      let web5;
      <br />
      let myDid;
      <br />
      ({ web5, did: myDid } = await Web5.connect());
    </template>
  </QuickstartStep>
  </main>
</template>