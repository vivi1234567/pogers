const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})
const token = process.env.token;


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("Dauntless");
})

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `trayaZnoj`) {
    return message.channel.send("Ja se abnormalno mnogo znojim :drunktraya:");
  }

  if(cmd === `whoMadeTraya`) {
      return message.channel.send("Vivi made me.");
  }

  if(cmd.includes("wot", 0)) {
      return message.channel.send("Aj platoon :drunktraya:");
  }

  if(cmd.includes("traja", 0)) {
      return message.channel.send(":drunktraya:");
  }

  if(cmd === `traya`) {
      return message.channel.send(":drunktraya:");
  }

  if(cmd.includes("abjus", 0)) {
      return message.channel.send(":right_facing_fist: :drunktraya: ");
  }

  if(cmd.includes("abjuz", 0)) {
      return message.channel.send(":right_facing_fist: :drunktraya: ");
  }

  if(cmd === `trayaRandom`){
    let embed = new Discord.RichEmbed();
    embed.setColor("#3366ff");

    var x = Math.floor((Math.random() * 19) + 1);
    console.log(x);
    switch (x) {
      case 1:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.15752-9/37392338_1889547567732742_6948972229812027392_n.jpg?_nc_cat=0&oh=6a790ac057bc93543e9e236ce434359c&oe=5C227012", 400, 400);
        break;
      case 2:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.15752-9/37638100_1889538397733659_5315625441640316928_n.jpg?_nc_cat=0&oh=991981fa5cebe8f97212e08f18563a06&oe=5BF55F32", 400, 400);
      break;
      case 3:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t35.18174-12/31029081_10204872189522468_404931329_o.png?_nc_cat=0&oh=7efdf23c56d4b08f7f46f1d58606cfc1&oe=5B9462F1", 400, 400);
      break;
      case 4:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t35.18174-12/31236292_10204872189482467_1516968059_o.png?_nc_cat=0&oh=f05386b9a67fce48270bab8898df9186&oe=5B946F89", 400, 400);
      break;
      case 5:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t35.18174-12/30825216_10204611355400162_684787048_o.jpg?_nc_cat=0&oh=c8b0522fc69f53c64443853da4cc40d9&oe=5B95A65D", 400, 400);
      break;
      case 6:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.15752-9/31253013_991906607633730_4731126198480928768_n.jpg?_nc_cat=0&oh=ef20ae635156e1afd3056629c336acd6&oe=5C23B4D9", 400, 400);
      break;
      case 7:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.15752-9/31180003_991906597633731_3778565979089403904_n.jpg?_nc_cat=0&oh=ea7c99ce9b8c2587821f1f388036d829&oe=5BF22B66", 400, 400);
      break;
      case 8:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t34.18173-12/27496348_10204529641438980_606914045_n.jpg?_nc_cat=0&oh=7d1dcbe68d25aa8dbb0bf97f11cd539a&oe=5B9595E6", 400, 400);
      break;
      case 9:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t35.18174-12/27535565_10204529637398879_972873607_o.jpg?_nc_cat=0&oh=49943ab8d963e03afeb45f54459f831c&oe=5B9564BC", 400, 400);
      break;
      case 10:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t35.18174-12/25552475_1606570669426139_1164945856_o.jpg?_nc_cat=0&oh=018abe09690bdf4cafc7a70fdc1b244a&oe=5B957C1B", 400, 400);
      break;
      case 11:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t35.18174-12/25397676_1601271616622711_913996073_o.jpg?_nc_cat=0&oh=3ce1057e11f9b919ccb91ddd544b1bd4&oe=5B955568", 400, 400);
      break;
      case 12:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t35.18174-12/23423489_1564911093592097_1677507613_o.jpg?_nc_cat=0&oh=f651860ff94d8506d3ff5b39484b0046&oe=5B953928", 400, 400);
      break;
      case 13:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t35.18174-12/22751106_1549531008463439_1095130828_o.jpg?_nc_cat=0&oh=e67e235ed02baf8d8619e9a5dd46d3f7&oe=5B95781C", 400, 400);
      break;
      case 14:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t34.18173-12/17270931_1331540180262524_1164155683_n.jpg?_nc_cat=0&oh=2403139bfdbf9c10d17505f6d323cc5b&oe=5B959478", 400, 400);
      break;
      case 15:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t34.18173-12/17270212_1331532990263243_1480947188_n.jpg?_nc_cat=0&oh=2846fab1db648e4833188ae30e0a4af2&oe=5B958D60", 400, 400);
      break;
      case 16:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t34.18173-12/15841072_1267789893304220_1618884686_n.jpg?_nc_cat=0&oh=8af3edf3edbe641ad6d697dafb155dd3&oe=5B952809", 400, 400);
      break;
      case 17:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t34.18173-12/15841865_1267789453304264_587276929_n.jpg?_nc_cat=0&oh=d5a25490c116d3579cfb1ab3db9876a6&oe=5B959100", 400, 400);
      break;
      case 18:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t34.18173-12/15722767_1261599407256602_675856974_n.jpg?_nc_cat=0&oh=870e4a4cdf842dcf303d0e596ce9f196&oe=5B95571F", 400, 400);
      break;
      case 19:
      embed.setImage("https://scontent.fbeg5-1.fna.fbcdn.net/v/t34.18173-12/15722767_1261599407256602_675856974_n.jpg?_nc_cat=0&oh=870e4a4cdf842dcf303d0e596ce9f196&oe=5B95571F", 400, 400);
      break;
        case 20:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487930636447776778/31821172_1744720578944480_1506263726699839488_n.png", 400, 400);
      break;
        case 21:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487930724171776040/31206483_1734884666594738_6333272201025814528_n.png", 400, 400);
      break;
        case 22:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487931154968870932/23226761_1562821163801090_1274692928_n.png", 400, 400);
      break;
         case 23:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487931200963608576/23315978_1562817670468106_233343998_n.png", 400, 400);
      break;
        case 24:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487931287466672128/22375360_1536167346466472_571792309_o.png", 400, 400);
      break;
         case 25:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487931317359607819/22119402_1528450083904865_140332958_n.png", 400, 400);
      break;
        case 26:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487931355720843284/22192789_1528236683926205_1148412055_n.png", 400, 400);
      break;
        case 27:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487931410821152768/21754436_1515140861902454_890372518_n.png", 400, 400);
      break;
          case 28:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487931443251773455/21729561_1515034328579774_1340301657_n.png", 400, 400);
      break;
        case 29:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487931479649943562/21741757_1514947695255104_1753284453_n.png", 400, 400);
      break;
        case 30:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487931647233359882/20227355_1468396776576863_1951632172_n.png", 400, 400);
      break;
        case 31:
      embed.setImage("https://cdn.discordapp.com/attachments/340539446329868290/487931687247020036/20270164_1468359686580572_155963022_n.png", 400, 400);
      break;
      default:
        break;
    }
    embed.setDescription(":drunktraya:")
    message.channel.send(embed);
  }
})

bot.login(botconfig.token);
