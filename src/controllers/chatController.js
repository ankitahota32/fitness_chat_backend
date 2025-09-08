export const handleChat = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    const userMessage = message.toLowerCase().trim();
    let responseText = "Sorry, I didn't understand. Can you rephrase ?";

    if (userMessage.includes("workout")) {
        responseText = "Got it! Do you want to log a new workout or view past ones ?";
    } else if (userMessage.includes("nutrition") || userMessage.includes("food")) {
        responseText = "Sure ! Do you want to log a meal or check calories"
    }

    return res.json({ response: responseText})
}
