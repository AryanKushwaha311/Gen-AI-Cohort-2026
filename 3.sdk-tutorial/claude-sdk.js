import {anthropic} from '@anthropic-ai/sdk';
const client  = new anthropic({
    apikey : process.env['ANTROPIC_API_KEY'],
})

async function init(){
    const result = await client.messages.create({
        max_tokens:1024,
        messages : [{role: 'user' , content : 'Hello , how are u , what is your name?'}],
        model : 'claude-opus-4-8',

    });

    for (const block of result.content) {
        if (block.type === "text") {
            console.log(block.text);
        }
    }
}

init();