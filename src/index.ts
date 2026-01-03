import { WaitHuman } from "@wait-human/client";

const waitHuman = new WaitHuman({
    apiKey: "sk_4101d7ff12d8328c9322526a125115ac7ce7d379b3f089d3",
    endpoint: "http://localhost:8080",
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
