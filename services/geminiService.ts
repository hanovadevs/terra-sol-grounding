import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';

const API_KEY = process.env.GEMINI_API_KEY || process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) {
    return chatSession;
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are 'Sol', the AI Wellness Assistant for Terra Sol Grounding.
      Your goal is to help users understand the benefits of grounding (earthing) and recommend the right products.

      Tone: Calming, informative, nature-focused, and scientific yet approachable.

      Key Info:
      - Grounding (Earthing): Connecting the body to the Earth's natural electrical charge.
      - Benefits: Better sleep, reduced inflammation, increased energy, stress relief.
      - Products: Grounding Mat ($49.99), Grounding Sheet ($79.99), Grounding Pillow Case ($34.99).
      - Warranty: 1-year limited warranty.
      - Mission: Reconnecting people with the Earth's natural energy.

      Keep responses concise and helpful. If asked about science, explain how free electrons neutralize free radicals.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm currently offline. (Missing API Key)";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error('Gemini Error:', error);
    return 'Connection lost. Please try again later.';
  }
};
