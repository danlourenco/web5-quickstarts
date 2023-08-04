import { defineStore } from 'pinia';
import { Web5 } from "@tbd54566975/web5";

interface State {
  did: string | null;
  web5: any | null;
}
export const useWeb5Store = defineStore('web5', {
  state: (): State => ({
    did: null,
    web5: null,
  }),
  actions: {
    async createDid() {
      const { web5, did } = await Web5.connect();
      this.web5 = web5;
      this.did = did;
      console.log('decentralized id created');
    }
  }

});