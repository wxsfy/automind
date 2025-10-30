import { NextResponse } from 'next/server';
import twilio from 'twilio';
import OpenAI from 'openai';

const VoiceResponse = twilio.twiml.VoiceResponse;
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
You are Ava, the AI receptionist for AutoMind — a Canadian company that builds smart AI systems
to help businesses work faster, smarter, and with less effort.

AutoMind specializes in:
- AI receptionists (voice + chat)
- AI client communication systems
- workflow automation
- and custom AI assistants for small businesses.

Tone: articulate, warm, confident, and intelligent. Sound like a real human assistant — conversational, professional, never robotic.

Your purpose:
- Greet callers politely and mention the company name.
- Ask what kind of business they run or what problem they’re trying to solve.
- Explain how AutoMind can automate their tasks.
- Offer to book a free consultation if they’re interested.
- Always end with gratitude and professionalism: “Thanks for calling AutoMind — we’ll be in touch soon.”

Rules:
- Never mention you are AI.
- Keep sentences short, natural, and confident.
`;

export async function POST(request) {
  try {
    const formData = await request.formData();
    const userSpeech = formData.get('SpeechResult') || 'No speech detected';

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userSpeech },
      ],
    });

    const aiReply = completion.choices[0].message.content;

    const twiml = new VoiceResponse();
    twiml.say(
      {
        voice: 'Polly.Joanna',
        language: 'en-US',
      },
      aiReply
    );

    return new Response(twiml.toString(), {
      status: 200,
      headers: { 'Content-Type': 'text/xml' },
    });
  } catch (error) {
    console.error('Error in Ava voice route:', error);
    const twiml = new VoiceResponse();
    twiml.say('Sorry, something went wrong. Please try again later.');
    return new Response(twiml.toString(), {
      status: 200,
      headers: { 'Content-Type': 'text/xml' },
    });
  }
}
