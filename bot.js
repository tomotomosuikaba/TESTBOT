const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("ログインしました。");
});

client.on("message", (message) => {
	if (message.content.startsWith("!ping")) {
		message.channel.send("pong!");
client.on("message", (message) => {
	if (message.content.startsWith("わーい！")) {
		message.channel.send("たーのしー！");
	}
});

client.login("Mzg1Mzc4MTI4MTgyMTE2MzU0.DQAhAg.LkZTwLQ8GKZtSOyoAsu-pSZkXE8");
