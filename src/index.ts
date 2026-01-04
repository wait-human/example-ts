import { WaitHuman } from "@wait-human/client";

const waitHuman = new WaitHuman({
    apiKey: "your_key",
});

const answer = await waitHuman.askMultipleChoice({
    subject: "Send invoice?",
    body: "Customer asked for a 3-page website. is 500$ ok?",
    choices: ["yes, send", "no"],
});

if (answer == "yes, send") {
    console.log(`Send!`);
} else {
    console.log(`wait...`);
}
