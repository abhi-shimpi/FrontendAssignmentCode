import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

export default openai;