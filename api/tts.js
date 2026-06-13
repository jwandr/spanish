export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { text, voice } = req.body;

  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;

  const endpoint =
    `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;

  const allowedVoices = new Set([
    "es-MX-DaliaNeural",
    "es-MX-JorgeNeural",
    "es-CL-CatalinaNeural",
    "es-CL-LorenzoNeural"
  ]);

  const selectedVoice =
    allowedVoices.has(voice) ? voice : "es-MX-DaliaNeural";

  const ssml = `
<speak version="1.0" xml:lang="es-MX">
  <voice name="${selectedVoice}">
    ${text}
  </voice>
</speak>`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": key,
      "Content-Type": "application/ssml+xml",
      "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3"
    },
    body: ssml
  });

  if (!response.ok) {
    return res.status(500).json({ error: "Azure TTS failed" });
  }

  const audio = await response.arrayBuffer();

  res.setHeader("Content-Type", "audio/mpeg");
  res.send(Buffer.from(audio));
}