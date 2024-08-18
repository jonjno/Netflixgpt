import OpenAI from "openai";
import { openAPI } from "./constants";

const openai = new OpenAI({
  apiKey: openAPI, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;
