<script setup lang="ts">
import  QuickstartStep from '../components/QuickstartStep.vue';
import { useWeb5Store } from '../stores/web5';

const web5Store = useWeb5Store();
</script>

<template>
  <main>
    <QuickstartStep 
      @run-step="web5Store.createDid"
      cta="Hit 'Run' above to create a DID" 
      success="Created!" 
      error="Error"
      :output="web5Store.did">
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

  <QuickstartStep 
    @run-step="web5Store.createDid" 
    :success="Created!" 
    :output="web5Store.did">
    <template #heading>Write some data</template>
    <template #code>
      <br />
      let result = await web5.dwn.records.create({
      <br />
            data,
            <br />
              message: {
              <br />
                dataFormat: 'text/plain',
              <br />
            },
            <br />
          });
          <br />
    </template>
  </QuickstartStep>
  </main>
</template>