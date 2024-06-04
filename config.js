const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kenocheenoche@gmail.com"
global.location="Nakuru,kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "+254726044290" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0726044290";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_50_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI4LFxuICAgICAgICA1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MixcbiAgICAgICAgMTY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIxLFxuICAgICAgICA3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzLFxuICAgICAgICA3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk3LFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWczdERETGQrdmZEcXd3S1dZY3IzOE1JcWVsNkdUalN6YmxyaGhRZDdqaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjYwNDQyOTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk5NDU1M0ZGQUU0MjhEQTdERUM2NTAzODYzOEU3QkJEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzQ4MDIyOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuWUZ4eEg3Q1RGV1IxNUR3VUlPX0FBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0Y2UxOGFhLTNmNWYtNDhhMS04MTIwLTIyNmU5OTQxZjQ2YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICAyNTIsXG4gICAgICA0LFxuICAgICAgNjUsXG4gICAgICA2NCxcbiAgICAgIDIyMSxcbiAgICAgIDc1LFxuICAgICAgMTI3LFxuICAgICAgMjMyLFxuICAgICAgMTg3LFxuICAgICAgMjA0LFxuICAgICAgMTYwLFxuICAgICAgNjUsXG4gICAgICAxNzQsXG4gICAgICAyMTQsXG4gICAgICAyMDEsXG4gICAgICAyNTUsXG4gICAgICAyMTgsXG4gICAgICA0MixcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDE3NyxcbiAgICAgIDgwLFxuICAgICAgMTc5LFxuICAgICAgNTAsXG4gICAgICAzMyxcbiAgICAgIDg5LFxuICAgICAgMjIzLFxuICAgICAgNjcsXG4gICAgICA0NSxcbiAgICAgIDI2LFxuICAgICAgMCxcbiAgICAgIDU4LFxuICAgICAgMTE0LFxuICAgICAgMjI4LFxuICAgICAgNTUsXG4gICAgICAyMjYsXG4gICAgICAxODAsXG4gICAgICAzMCxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDWTYxTlg4UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI2MDQ0MjkwOjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg1NDU5NDkwNDkwNTY6NjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pmU6qeBxLbDisORw5jDh0jElOqnguKZlFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TdXBMOERFSnpXK3JJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL1IyNjI0cjZMaTE2SzFleTlCSGUvNWE4QktTRlBFZFQrQWNKYkt4b0RRQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3WEVjWnU3eU1vYUVtQkJyZ2VDNk5tMjNvam5XbWMwajdLYXplVHhiYWpqZVNTLzFSdU9aVTlybFM2MDAyQ3FnWXNnUHcvaGtYYXlQQzR1R1Rjb3dBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEcWpNS29Zd1JpTDhZS1JycUlEZEFYaTgyVmFCU0xFQmxBNEJJZUYxMVZOQklqcGVnNkZ1Y1U3eXlRZkFPejhxZWlhaFptTk9Wd2dZbjFVVElIV0dpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjYwNDQyOTA6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc0ODAyMjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKWFRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpYVC5qc29uIjogIntcImtleURhdGFcIjpcIlRLM1V6U3VRRU9GWVRpZTV1U3ZEY0VybWVsNTIxY0FFZVpwSGtnNzhtdUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTM4MDIyNzE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "♔꧁ĶÊÑØÇHĔ꧂♔",
  packname: process.env.PACK_NAME || "♔꧁ĶÊÑØÇHĔ꧂♔",
  botname : process.env.BOT_NAME  || "♔꧁ĶÊÑØÇHĔ꧂♔-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'♔꧁ĶÊÑØÇHĔ꧂♔",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "all",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "♔꧁ĶÊÑØÇHĔ꧂♔"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "log", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
