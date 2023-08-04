import { defineStore } from 'pinia';
import { Web5 } from "@tbd54566975/web5";

// TODO: Properly type this state
interface State {
  did: string | null;
  web5: any | null;
  record: any | null;
}
export const useWeb5Store = defineStore('web5', {
  state: (): State => ({
    did: null,
    web5: null,
    record: null,
  }),
  actions: {
    async createDid() {
      const { web5, did } = await Web5.connect();
      this.web5 = web5;
      this.did = did;
      console.log('decentralized id created');
    },
    async createTextRecord(text: string) {
      const result = await this.web5.dwn.records.create({
        data: text,
        message: {
          dataFormat: "text/plain"
        }
      });
      this.record = result.record;
      return result;
    }
  }

});