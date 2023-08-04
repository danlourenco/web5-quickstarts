import { describe, expect, test } from "vitest";
import { Web5 } from "@tbd54566975/web5";
import { beforeAll } from "vitest";


let web5, aliceDid, recordResult;

describe("Web5", () => {
  beforeAll(async () => {
    const connectResponse = await Web5.connect();
    web5 = connectResponse.web5;
    aliceDid = connectResponse.did;
  });

  describe("connect", () => {
    test("calling `Web5.connect() returns a Web5 instance and did", async () => {
      expect(web5).toBeDefined(); 
      expect(web5.dwn).toBeDefined();
      expect(aliceDid).toBeDefined();
    });
  
    test("decentralized id return conforms to spec", () => {
      expect(typeof aliceDid).toBe('string');
      const didRegex = /^did:[a-z0-9]+:.+/i;
      expect(didRegex.test(aliceDid)).toBe(true);
    });
  });

  describe("dwn", () => {
    test("can create a record on a dwn",  async () => {
      const response =  await web5.dwn.records.create({
        data: "Sample Data",
        message: {
          dataFormat: "text/plain"
        }
      });
      recordResult = response.record;
      expect.soft(response.status.code).toBe(202);
      expect(recordResult.author).toBe(aliceDid);

    });
  });

});