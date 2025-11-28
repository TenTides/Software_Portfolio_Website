const MODEL_API_KEY = import.meta.env.VITE_MODEL_API_KEY || '';
const MODEL_API_URL = import.meta.env.VITE_MODEL_API_URL || 'https://generativelanguage.googleapis.com/v1beta/models';
const MODEL_NAME = import.meta.env.VITE_MODEL_NAME || 'gemini-2.5-flash-preview-09-2025';

const buildEndpoint = (customUrl) => {
  if (customUrl) return customUrl;
  return `${MODEL_API_URL.replace(/\/$/, '')}/${MODEL_NAME}:generateContent`;
};

export const callAI = async (prompt, systemInstruction = '', responseSchema = null, { apiKey, endpoint } = {}) => {
  const key = apiKey || MODEL_API_KEY;
  if (!key) {
    throw new Error('Missing model API key. Set VITE_MODEL_API_KEY or pass apiKey into callAI.');
  }

  const url = buildEndpoint(endpoint);

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    ...(systemInstruction
      ? { systemInstruction: { parts: [{ text: systemInstruction }] } }
      : {}),
    ...(responseSchema
      ? { generationConfig: { responseMimeType: 'application/json', responseSchema } }
      : {})
  };

  const maxRetries = 5;
  const delays = [1000, 2000, 4000, 8000, 16000];

  for (let attempt = 0; attempt < maxRetries; attempt += 1) {
    try {
      const response = await fetch(`${url}?key=${key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error('No content generated');
      return text;
    } catch (error) {
      if (attempt === maxRetries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, delays[attempt]));
    }
  }

  throw new Error('Unexpected error while calling model API');
};
