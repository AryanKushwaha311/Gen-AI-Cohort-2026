import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function main() {
    try {
        console.log('Sending request to Gemini...');

        const response = await ai.models.generateContent({
            model: 'gemini-flash-latest',
            contents: 'Why is the sky blue?',
        });

        console.log(response.text);

    } catch (error) {
        console.error('Error:', error);
    }
}

main();





/*
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function main() {
    const response = await ai.models.generateContent({
        model: 'gemini-flash-latest',
        contents: 'Why is the sky blue?',
    });

    console.log(response.text);
}

main();
*/